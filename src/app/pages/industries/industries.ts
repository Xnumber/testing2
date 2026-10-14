import { Component, computed, signal } from '@angular/core';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinitionList } from '../../components/term-definition-list/term-definition-list';
import { industryPages } from './industry-pages';

@Component({
  imports: [TermBoard, TermDefinitionList],
  selector: 'app-industries',
  styleUrl: './industries.css',
  templateUrl: './industries.html',
})
export class Industries {
  protected readonly industries: FinancialTerm[] = Object.values(industryPages).map(
    ({ title, summary }) => ({ title, description: summary[0]?.description[0] ?? '' }),
  );

  protected readonly selectedIndustry = signal<FinancialTerm | null>(null);
  protected readonly selectedSummary = computed(() => {
    const selectedTitle = this.selectedIndustry()?.title;
    return Object.values(industryPages).find((page) => page.title === selectedTitle)?.summary ?? [];
  });
  protected readonly sidebarCollapsed = signal(true);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  protected selectIndustry(industry: FinancialTerm): void {
    this.selectedIndustry.set(industry);
  }

  protected canGoPrevious(): boolean {
    return this.getSelectedIndustryIndex() > 0;
  }

  protected canGoNext(): boolean {
    return this.getSelectedIndustryIndex() < this.industries.length - 1;
  }

  protected moveIndustry(direction: -1 | 1): void {
    const currentIndex = this.getSelectedIndustryIndex();
    const nextIndex = currentIndex < 0
      ? (direction === 1 ? 0 : this.industries.length - 1)
      : currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < this.industries.length) {
      this.selectedIndustry.set(this.industries[nextIndex]);
    }
  }

  private getSelectedIndustryIndex(): number {
    const selectedTitle = this.selectedIndustry()?.title;
    return this.industries.findIndex((industry) => industry.title === selectedTitle);
  }
}
