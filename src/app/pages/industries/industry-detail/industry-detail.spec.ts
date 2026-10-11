import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { industryPages } from '../industry-pages';
import { IndustryDetail } from './industry-detail';

describe('IndustryDetail', () => {
	let fixture: ComponentFixture<IndustryDetail>;
	let routeData: BehaviorSubject<Data>;

	beforeEach(async () => {
		const initialData: Data = { topics: industryPages['ic-design'].topics };
		routeData = new BehaviorSubject(initialData);

		await TestBed.configureTestingModule({
			imports: [IndustryDetail],
			providers: [{
				provide: ActivatedRoute,
				useValue: { data: routeData.asObservable(), snapshot: { data: initialData } },
			}],
		}).compileComponents();

		fixture = TestBed.createComponent(IndustryDetail);
		await fixture.whenStable();
	});

	it('should create and render the route topics', () => {
		const compiled = fixture.nativeElement as HTMLElement;

		expect(compiled.querySelectorAll('.term-chip').length).toBe(3);
		expect(compiled.querySelector('.term-chip')?.textContent).toContain('產品組合');
	});

	it('should display a selected topic and update topics when route data changes', async () => {
		const compiled = fixture.nativeElement as HTMLElement;
		(compiled.querySelector('.term-chip') as HTMLButtonElement).click();
		fixture.detectChanges();

		expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('產品組合');

		routeData.next({ topics: industryPages['life-insurance'].topics });
		await fixture.whenStable();
		fixture.detectChanges();

		expect(compiled.querySelector('.term-chip')?.textContent).toContain('新契約價值');
		expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('從一個詞開始');
	});
});
