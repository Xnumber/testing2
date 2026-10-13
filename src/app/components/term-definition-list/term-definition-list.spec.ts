import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialTerm } from '../financial-term';
import { TermDefinitionList } from './term-definition-list';

describe('TermDefinitionList', () => {
	let fixture: ComponentFixture<TermDefinitionList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TermDefinitionList],
		}).compileComponents();

		fixture = TestBed.createComponent(TermDefinitionList);
	});

	it('renders each financial term in the input list', () => {
		const terms: FinancialTerm[] = [
			{ title: '產品組合', description: ['觀察產品營收占比。', '留意產品組合變化。'] },
			{ title: '研發投入', description: '留意研發費用與新產品時程。' },
		];
		fixture.componentRef.setInput('terms', terms);
		fixture.detectChanges();

		const element = fixture.nativeElement as HTMLElement;

		expect(element.querySelectorAll('.definition-entry').length).toBe(2);
		expect(element.textContent).toContain('產品組合');
		expect(element.textContent).toContain('研發投入');
		expect(element.querySelectorAll('.definition-entry:first-child br').length).toBe(1);
		expect(element.querySelector('.definition-entry:last-child br')).toBeNull();
	});
});
