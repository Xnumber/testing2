import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinition } from '../../components/term-definition/term-definition';
import { industryPages } from './industry-pages';

@Component({
  imports: [TermBoard, TermDefinition],
  selector: 'app-industries',
  styleUrl: './industries.css',
  templateUrl: './industries.html',
})
export class Industries {
  protected readonly industries: FinancialTerm[] = Object.values(industryPages).map(
    ({ title, summary }) => ({ title, description: summary }),
  );

  protected readonly selectedIndustry = signal<FinancialTerm | null>(null);
  protected readonly sidebarCollapsed = signal(false);
  private readonly router = inject(Router);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  protected selectIndustry(industry: FinancialTerm): void {
    this.selectedIndustry.set(industry);
    const routePath = Object.entries(industryPages)
      .find(([, page]) => page.title === industry.title)?.[0];

    if (routePath) {
      void this.router.navigateByUrl(`/${routePath}`);
    }
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
