import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lava } from './lava-background';

describe('Lava', () => {
	let fixture: ComponentFixture<Lava>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Lava],
		}).compileComponents();

		fixture = TestBed.createComponent(Lava);
		await fixture.whenStable();
	});

	it('should create a decorative canvas background', () => {
		expect(fixture.componentInstance).toBeTruthy();
		expect(fixture.nativeElement.querySelector('canvas.lava-canvas')).toBeTruthy();
	});
});