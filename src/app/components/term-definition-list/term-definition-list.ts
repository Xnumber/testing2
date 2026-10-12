import { Component, input, output } from '@angular/core';
import { FinancialTerm } from '../financial-term';

@Component({
	selector: 'app-term-definition-list',
	styleUrl: './term-definition-list.css',
	templateUrl: './term-definition-list.html',
})
export class TermDefinitionList {
	readonly terms = input<FinancialTerm[]>([]);
	readonly canGoPrevious = input(false);
	readonly canGoNext = input(false);
	readonly heading = input('重點解讀');
	readonly navigationLabel = input('切換項目');
	readonly emptyTitle = input('從一個項目開始。');
	readonly emptyDescription = input('點選左側任一項目，這裡會顯示對應內容。');
	readonly termMoved = output<-1 | 1>();
}
