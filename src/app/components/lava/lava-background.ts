import { isPlatformBrowser } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	NgZone,
	OnDestroy,
	PLATFORM_ID,
	ViewChild,
	inject,
} from '@angular/core';
import type {
	Mesh,
	OrthographicCamera,
	PlaneGeometry,
	Scene,
	ShaderMaterial,
	WebGLRenderer,
} from 'three';

const VERTEX_SHADER = /* glsl */ `
	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = vec4(position, 1.0);
	}
`;

const FRAGMENT_SHADER = /* glsl */ `
	precision highp float;

	varying vec2 vUv;
	uniform vec2 uResolution;
	uniform float uTime;

	float hash(vec2 p) {
		p = fract(p * vec2(123.34, 456.21));
		p += dot(p, p + 45.32);
		return fract(p.x * p.y);
	}

	float noise(vec2 p) {
		vec2 i = floor(p);
		vec2 f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		return mix(
			mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
			mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
			u.y
		);
	}

	float fbm(vec2 p) {
		float value = 0.0;
		float amplitude = 0.5;
		mat2 rotation = mat2(1.6, -1.2, 1.2, 1.6);
		for (int i = 0; i < 4; i++) {
			value += amplitude * noise(p);
			p = rotation * p;
			amplitude *= 0.5;
		}
		return value;
	}

	void main() {
		vec2 uv = vUv;
		vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
		float time = uTime * 0.12;

		vec2 warp = vec2(
			fbm(p * 2.4 + vec2(0.0, time * 0.8)),
			fbm(p * 2.4 + vec2(4.2, -time))
		);
		float flow = fbm(p * 2.8 + warp * 3.2 + vec2(time * 0.55, -time * 0.7));
		float detail = fbm(p * 6.0 + warp * 4.0 - time * 0.45);
		float field = flow * 0.76 + detail * 0.24;
		float river = abs(field - 0.51 + 0.045 * sin(p.y * 8.0 + warp.x * 8.0));

		float glow = 1.0 - smoothstep(0.07, 0.28, river);
		float molten = 1.0 - smoothstep(0.025, 0.105, river);
		float core = 1.0 - smoothstep(0.008, 0.045, river);

		vec3 color = vec3(0.008, 0.006, 0.009);
		color += vec3(0.24, 0.025, 0.003) * glow;
		color = mix(color, vec3(0.9, 0.075, 0.006), molten);
		color = mix(color, vec3(1.0, 0.31, 0.018), glow * 0.78);
		color = mix(color, vec3(1.0, 0.82, 0.32), core * 0.95);

		float vignette = 1.0 - smoothstep(0.18, 1.05, length(p * vec2(0.72, 0.9)));
		color *= mix(0.42, 1.0, vignette);
		gl_FragColor = vec4(color, 1.0);
	}
`;

@Component({
	selector: 'app-lava-background',
	styleUrl: './lava-background.css',
	templateUrl: './lava-background.html',
})
export class Lava implements AfterViewInit, OnDestroy {
	@ViewChild('canvas', { static: true })
	private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

	private readonly platformId = inject(PLATFORM_ID);
	private readonly zone = inject(NgZone);
	private renderer?: WebGLRenderer;
	private material?: ShaderMaterial;
	private geometry?: PlaneGeometry;
	private scene?: Scene;
	private camera?: OrthographicCamera;
	private animationFrame = 0;
	private startedAt = 0;
	private reducedMotion = false;
	private destroyed = false;
	private readonly onResize = (): void => this.resizeRenderer();
	private readonly onVisibilityChange = (): void => {
		if (document.hidden) {
			cancelAnimationFrame(this.animationFrame);
		} else {
			this.renderFrame();
		}
	};
	private readonly onMotionPreferenceChange = (event: MediaQueryListEvent): void => {
		this.reducedMotion = event.matches;
		cancelAnimationFrame(this.animationFrame);
		if (!this.reducedMotion && !document.hidden) {
			this.renderFrame();
		}
	};

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		this.zone.runOutsideAngular(() => void this.initializeScene());
	}

	ngOnDestroy(): void {
		this.destroyed = true;
		cancelAnimationFrame(this.animationFrame);
		document.removeEventListener('visibilitychange', this.onVisibilityChange);
		this.motionQuery?.removeEventListener('change', this.onMotionPreferenceChange);
		window.removeEventListener('resize', this.onResize);
		this.renderer?.dispose();
		this.material?.dispose();
		this.geometry?.dispose();
	}

	private motionQuery?: MediaQueryList;

	private async initializeScene(): Promise<void> {
		try {
			const THREE = await import('three');
			if (this.destroyed) {
				return;
			}

			const canvas = this.canvasRef.nativeElement;
			this.renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: false,
				alpha: false,
				powerPreference: 'low-power',
			});
			this.renderer.setClearColor(0x080503, 1);

			this.material = new THREE.ShaderMaterial({
				vertexShader: VERTEX_SHADER,
				fragmentShader: FRAGMENT_SHADER,
				uniforms: {
					uResolution: { value: new THREE.Vector2(1, 1) },
					uTime: { value: 0 },
				},
			});
			this.scene = new THREE.Scene();
			this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
			this.camera.position.z = 1;
			this.geometry = new THREE.PlaneGeometry(2, 2);
			const plane = new THREE.Mesh(this.geometry, this.material);
			this.scene.add(plane);

			this.resizeRenderer();
			window.addEventListener('resize', this.onResize, { passive: true });
			document.addEventListener('visibilitychange', this.onVisibilityChange);
			this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			this.reducedMotion = this.motionQuery.matches;
			this.motionQuery.addEventListener('change', this.onMotionPreferenceChange);

			this.startedAt = performance.now();
			this.renderFrame();
		} catch {
			// Keep the CSS gradient visible when WebGL is unavailable.
		}
	}

	private resizeRenderer(): void {
		if (!this.renderer || !this.material) {
			return;
		}

		const { innerWidth, innerHeight } = window;
		const mobileScale = innerWidth < 760 ? 0.78 : 1;
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5) * mobileScale);
		this.renderer.setSize(innerWidth, innerHeight, false);
		this.material.uniforms['uResolution'].value.set(innerWidth, innerHeight);
	}

	private renderFrame(): void {
		if (!this.renderer || !this.material || !this.scene || !this.camera || document.hidden) {
			return;
		}

		this.material.uniforms['uTime'].value = (performance.now() - this.startedAt) / 1000;
		this.renderer.render(this.scene, this.camera);
		if (!this.reducedMotion) {
			this.animationFrame = requestAnimationFrame(() => this.renderFrame());
		}
	}
}