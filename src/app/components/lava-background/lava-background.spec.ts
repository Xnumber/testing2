import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LavaBackground } from './lava-background';

describe('LavaBackground', () => {
	let fixture: ComponentFixture<LavaBackground>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LavaBackground],
		}).compileComponents();

		fixture = TestBed.createComponent(LavaBackground);
		await fixture.whenStable();
	});

	it('should create a decorative canvas background', () => {
		expect(fixture.componentInstance).toBeTruthy();
		expect(fixture.nativeElement.querySelector('canvas.lava-canvas')).toBeTruthy();
	});
});