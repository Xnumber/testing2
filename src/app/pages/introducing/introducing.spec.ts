import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Introducing } from './introducing';

describe('Introducing', () => {
  let component: Introducing;
  let fixture: ComponentFixture<Introducing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introducing],
    }).compileComponents();

    fixture = TestBed.createComponent(Introducing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all financial terms', () => {
    const terms = fixture.nativeElement.querySelectorAll('.term-chip');

    expect(terms.length).toBe(14);
  });

  it('should show a term explanation when a term is selected', () => {
    const firstTerm = fixture.nativeElement.querySelector('.term-chip') as HTMLButtonElement;

    firstTerm.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.definition-card h2')?.textContent).toContain('ROA');
    expect(fixture.nativeElement.querySelector('.selected-term-label')?.textContent).toContain('ROA');
    expect(fixture.nativeElement.querySelector('.definition-card p:not(.definition-index)')?.textContent)
      .toContain('資產報酬率');
  });

  it('should collapse and expand the financial terms sidebar', () => {
    const toggle = fixture.nativeElement.querySelector('.sidebar-toggle') as HTMLButtonElement;
    const explorer = fixture.nativeElement.querySelector('.explorer') as HTMLElement;

    toggle.click();
    fixture.detectChanges();
    expect(explorer.classList).toContain('explorer--collapsed');
    expect(toggle.getAttribute('aria-label')).toBe('展開側邊欄');

    toggle.click();
    fixture.detectChanges();
    expect(explorer.classList).not.toContain('explorer--collapsed');
    expect(toggle.getAttribute('aria-label')).toBe('收合側邊欄');
  });

  it('should navigate between terms without opening the sidebar', () => {
    (fixture.nativeElement.querySelector('[aria-label="下一個詞彙"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.definition-card h2')?.textContent).toContain('ROA');

    (fixture.nativeElement.querySelector('[aria-label="下一個詞彙"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.definition-card h2')?.textContent).toContain('ROE');

    (fixture.nativeElement.querySelector('[aria-label="上一個詞彙"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.definition-card h2')?.textContent).toContain('ROA');
  });
});
