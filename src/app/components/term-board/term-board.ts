import { Component, input, output } from '@angular/core';
import { FinancialTerm } from '../financial-term';

@Component({
	selector: 'app-term-board',
	styleUrl: './term-board.css',
	templateUrl: './term-board.html',
})
export class TermBoard {
	readonly terms = input.required<FinancialTerm[]>();
	readonly selectedTerm = input<FinancialTerm | null>(null);
	readonly collapsed = input(false);
	readonly termSelected = output<FinancialTerm>();
	readonly sidebarToggled = output<void>();
}