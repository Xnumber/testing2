import { Component, signal } from '@angular/core';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinitionList } from '../../components/term-definition-list/term-definition-list';

@Component({
  imports: [TermBoard, TermDefinitionList],
  selector: 'app-comprehensive-comparison',
  templateUrl: './comprehensive-comparison.html',
})
export class ComprehensiveComparison {
  protected readonly terms: FinancialTerm[] = [];
  protected readonly sidebarCollapsed = signal(false);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }
}
