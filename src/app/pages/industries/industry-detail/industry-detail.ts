import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FinancialTerm } from '../../../components/financial-term';
import { TermBoard } from '../../../components/term-board/term-board';
import { TermDefinition } from '../../../components/term-definition/term-definition';

@Component({
	imports: [TermBoard, TermDefinition],
	selector: 'app-industry-detail',
	styleUrl: './industry-detail.css',
	templateUrl: './industry-detail.html',
})
export class IndustryDetail {
	private readonly route = inject(ActivatedRoute);
	private readonly routeData = toSignal(this.route.data, {
		initialValue: this.route.snapshot.data,
	});

	protected readonly topics = computed(
		() => (this.routeData()['topics'] as FinancialTerm[] | undefined) ?? [],
	);
	protected readonly selectedTopic = signal<FinancialTerm | null>(null);
	protected readonly sidebarCollapsed = signal(false);

	constructor() {
		effect(() => {
			this.routeData();
			this.selectedTopic.set(null);
		});
	}

	protected toggleSidebar(): void {
		this.sidebarCollapsed.update((collapsed) => !collapsed);
	}

	protected selectTopic(topic: FinancialTerm): void {
		this.selectedTopic.set(topic);
	}

	protected canGoPrevious(): boolean {
		return this.getSelectedTopicIndex() > 0;
	}

	protected canGoNext(): boolean {
		return this.getSelectedTopicIndex() < this.topics().length - 1;
	}

	protected moveTopic(direction: -1 | 1): void {
		const currentIndex = this.getSelectedTopicIndex();
		const nextIndex = currentIndex < 0
			? (direction === 1 ? 0 : this.topics().length - 1)
			: currentIndex + direction;

		if (nextIndex >= 0 && nextIndex < this.topics().length) {
			this.selectedTopic.set(this.topics()[nextIndex]);
		}
	}

	private getSelectedTopicIndex(): number {
		const selectedTitle = this.selectedTopic()?.title;
		return this.topics().findIndex((topic) => topic.title === selectedTitle);
	}
}
