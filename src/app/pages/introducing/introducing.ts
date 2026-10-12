import { Component, computed, signal } from '@angular/core';
import { FinancialTerm } from '../../components/financial-term';
import { TermBoard } from '../../components/term-board/term-board';
import { TermDefinitionList } from '../../components/term-definition-list/term-definition-list';
import { introducingPages } from './introducing-pages';

@Component({
  imports: [TermBoard, TermDefinitionList],
  selector: 'app-introducing',
  styleUrl: './introducing.css',
  templateUrl: './introducing.html',
})
export class Introducing {
  protected readonly categories: FinancialTerm[] = Object.values(introducingPages).map(
    ({ title, summary }) => ({ title, description: summary[0]?.description ?? '' }),
  );

  protected readonly selectedCategory = signal<FinancialTerm | null>(null);
  protected readonly selectedTerms = computed(() => {
    const selectedTitle = this.selectedCategory()?.title;
    return Object.values(introducingPages).find((page) => page.title === selectedTitle)?.summary ?? [];
  });
  protected readonly sidebarCollapsed = signal(false);

  protected toggleSidebar(): void {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  protected selectCategory(category: FinancialTerm): void {
    this.selectedCategory.set(category);
  }

  protected canGoPrevious(): boolean {
    return this.getSelectedCategoryIndex() > 0;
  }

  protected canGoNext(): boolean {
    return this.getSelectedCategoryIndex() < this.categories.length - 1;
  }

  protected moveCategory(direction: -1 | 1): void {
    const currentIndex = this.getSelectedCategoryIndex();
    const nextIndex = currentIndex < 0
      ? (direction === 1 ? 0 : this.categories.length - 1)
      : currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < this.categories.length) {
      this.selectedCategory.set(this.categories[nextIndex]);
    }
  }

  private getSelectedCategoryIndex(): number {
    const selectedTitle = this.selectedCategory()?.title;
    return this.categories.findIndex((category) => category.title === selectedTitle);
  }
}
