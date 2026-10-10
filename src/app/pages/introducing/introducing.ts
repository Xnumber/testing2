import { Component, signal } from '@angular/core';

interface FinancialTerm {
  title: string;
  description: string;
}

@Component({
  imports: [],
  selector: 'app-introducing',
  styleUrl: './introducing.css',
  templateUrl: './introducing.html',
})
export class Introducing {
  protected readonly terms: FinancialTerm[] = [
    {
      title: 'ROA',
      description: '資產報酬率，衡量企業運用全部資產創造獲利的能力。通常以稅後淨利除以平均總資產計算。',
    },
    {
      title: 'ROE',
      description: '股東權益報酬率，呈現股東投入的權益資本為企業帶來多少獲利。常以稅後淨利除以平均股東權益計算。',
    },
    {
      title: 'ROIC',
      description: '投入資本報酬率，衡量企業運用營運所需資本創造報酬的效率，有助於評估本業投資的成果。',
    },
    {
      title: '負債比',
      description: '負債總額占資產總額的比例，常用來觀察企業資產中有多少是由負債融資。',
    },
    {
      title: '股東權益',
      description: '企業資產扣除負債後歸屬股東的剩餘權益，也稱為淨值。',
    },
    {
      title: '資產運用效能',
      description: '觀察企業如何運用資產帶動營收與現金回收的指標集合，常搭配周轉率與周轉天數分析。',
    },
    {
      title: '流動比率',
      description: '流動資產除以流動負債，用來評估企業以短期資產償還短期債務的能力。',
    },
    {
      title: '負債比率',
      description: '呈現企業負債相對於資產或權益的程度；解讀時需留意採用的公式與產業特性。',
    },
    {
      title: '現金與約當現金',
      description: '包含庫存現金、活期存款，以及可迅速轉換為已知金額現金且價值變動風險很低的短期投資。',
    },
    {
      title: '應收帳款周轉天數',
      description: '估算企業平均需要多少天收回應收帳款。天數較短通常代表收款較快，但也需配合授信政策判讀。',
    },
    {
      title: '存貨周轉天數',
      description: '估算存貨平均在庫多少天才售出。天數變化可能反映銷售速度、備貨策略或存貨管理狀況。',
    },
    {
      title: '無形資產',
      description: '沒有實體形態、可辨認且由企業控制的非貨幣性資產，例如專利、商標或符合認列條件的軟體。',
    },
    {
      title: '現金流量表',
      description: '呈現一段期間現金及約當現金的流入與流出，並分為營業、投資及籌資活動。',
    },
    {
      title: '資產負債表',
      description: '呈現特定日期企業的資產、負債與股東權益，是觀察財務結構與償債能力的重要報表。',
    },
  ];

  protected readonly selectedTerm = signal<FinancialTerm | null>(null);
  protected readonly sidebarCollapsed = signal(false);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  protected selectTerm(term: FinancialTerm): void {
    this.selectedTerm.set(term);
  }

  protected canGoPrevious(): boolean {
    const currentIndex = this.getSelectedTermIndex();
    return currentIndex > 0;
  }

  protected canGoNext(): boolean {
    const currentIndex = this.getSelectedTermIndex();
    return currentIndex < this.terms.length - 1;
  }

  protected moveTerm(direction: -1 | 1): void {
    const currentIndex = this.getSelectedTermIndex();
    const nextIndex = currentIndex < 0 ? (direction === 1 ? 0 : this.terms.length - 1) : currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < this.terms.length) {
      this.selectedTerm.set(this.terms[nextIndex]);
    }
  }

  private getSelectedTermIndex(): number {
    const selectedTitle = this.selectedTerm()?.title;
    return this.terms.findIndex((term) => term.title === selectedTitle);
  }
}