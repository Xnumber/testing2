import { Component, input, output } from '@angular/core';
import { FinancialTerm } from '../financial-term';

@Component({
	selector: 'app-term-definition',
	styleUrl: './term-definition.css',
	templateUrl: './term-definition.html',
})
export class TermDefinition {
	readonly selectedTerm = input<FinancialTerm | null>(null);
	readonly canGoPrevious = input(false);
	readonly canGoNext = input(false);
	readonly termMoved = output<-1 | 1>();
}