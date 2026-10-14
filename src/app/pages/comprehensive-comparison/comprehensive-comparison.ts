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
  protected readonly terms: FinancialTerm[] = [
    {
      title: '思考',
      description: [ 
        '產業特徵影響了財務上的表現',
        '財務上的表現也會反映產業特徵'
      ]
    }
  ];
  protected readonly sidebarCollapsed = signal(true);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }
}
