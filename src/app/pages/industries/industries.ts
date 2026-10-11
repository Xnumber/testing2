import { Component, signal } from '@angular/core';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinition } from '../../components/term-definition/term-definition';

@Component({
  imports: [TermBoard, TermDefinition],
  selector: 'app-industries',
  styleUrl: './industries.css',
  templateUrl: './industries.html',
})
export class Industries {
  protected readonly industries: FinancialTerm[] = [
    {
      title: '半導體',
      description: '產業景氣受終端需求與庫存循環影響，分析時可留意資本支出、產能利用率與產品組合。',
    },
    {
      title: '電子代工',
      description: '以規模製造與供應鏈管理為核心，營運表現常與客戶訂單、產能配置及毛利率變化相關。',
    },
    {
      title: '零售通路',
      description: '透過商品銷售與門市營運創造收入，可觀察同店營收、存貨周轉和展店效率。',
    },
  ];

  protected readonly selectedIndustry = signal<FinancialTerm | null>(null);
  protected readonly sidebarCollapsed = signal(false);

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
