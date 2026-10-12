import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { FinancialReports } from './financial-reports';

describe('FinancialReports', () => {
	let fixture: ComponentFixture<FinancialReports>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FinancialReports],
			providers: [provideRouter(routes)],
		}).compileComponents();

		fixture = TestBed.createComponent(FinancialReports);
		fixture.detectChanges();
		await fixture.whenStable();
	});

	it('shows the report sections and updates the aside without navigating', async () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const router = TestBed.inject(Router);
		await router.navigateByUrl('/financial-reports');
		await fixture.whenStable();

		expect(compiled.querySelectorAll('.term-chip').length).toBe(4);
		expect(compiled.querySelector('.term-chip')?.textContent).toContain('損益表');

		(compiled.querySelector('.term-chip') as HTMLButtonElement).click();
		fixture.detectChanges();
		await fixture.whenStable();

		expect(compiled.querySelectorAll('.definition-entry').length).toBe(3);
		expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('分類項目');
		expect(router.url).toBe('/financial-reports');
	});
});
