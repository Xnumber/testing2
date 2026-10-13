import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprehensiveComparison } from './comprehensive-comparison';

describe('ComprehensiveComparison', () => {
  let fixture: ComponentFixture<ComprehensiveComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprehensiveComparison],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprehensiveComparison);
    await fixture.whenStable();
  });

  it('renders the comparison page structure without content', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.subtitle')?.textContent).toContain('綜合比較');
    expect(element.querySelector('.term-board')).not.toBeNull();
    expect(element.querySelector('.definition-card')).not.toBeNull();
    expect(element.querySelectorAll('.term-chip').length).toBe(0);
    expect(element.querySelectorAll('.definition-entry').length).toBe(0);
  });
});
