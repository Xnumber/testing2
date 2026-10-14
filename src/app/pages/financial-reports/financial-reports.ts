import { Component, computed, signal } from '@angular/core';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinitionList } from '../../components/term-definition-list/term-definition-list';
import { financialReportPages } from './financial-report-pages';

@Component({
	standalone: true,
	imports: [TermBoard, TermDefinitionList],
	selector: 'app-financial-reports',
	styleUrl: './financial-reports.css',
	templateUrl: './financial-reports.html',
})
export class FinancialReports {
	protected readonly sections: FinancialTerm[] = Object.values(financialReportPages).map(
		({ title, summary }) => ({ title, description: summary[0]?.description ?? '' }),
	);

	protected readonly selectedSection = signal<FinancialTerm | null>(null);
	protected readonly selectedTerms = computed(() => {
		const selectedTitle = this.selectedSection()?.title;
		return Object.values(financialReportPages).find((section) => section.title === selectedTitle)?.summary ?? [];
	});
	protected readonly sidebarCollapsed = signal(true);

	protected toggleSidebar(): void {
		this.sidebarCollapsed.update((collapsed) => !collapsed);
	}

	protected selectSection(section: FinancialTerm): void {
		this.selectedSection.set(section);
	}

	protected canGoPrevious(): boolean {
		return this.getSelectedSectionIndex() > 0;
	}

	protected canGoNext(): boolean {
		return this.getSelectedSectionIndex() < this.sections.length - 1;
	}

	protected moveSection(direction: -1 | 1): void {
		const currentIndex = this.getSelectedSectionIndex();
		const nextIndex = currentIndex < 0
			? (direction === 1 ? 0 : this.sections.length - 1)
			: currentIndex + direction;

		if (nextIndex >= 0 && nextIndex < this.sections.length) {
			this.selectedSection.set(this.sections[nextIndex]);
		}
	}

	private getSelectedSectionIndex(): number {
		const selectedTitle = this.selectedSection()?.title;
		return this.sections.findIndex((section) => section.title === selectedTitle);
	}
}
