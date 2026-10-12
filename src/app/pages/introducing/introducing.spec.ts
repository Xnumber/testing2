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

  it('should render all term categories', () => {
    const categories = fixture.nativeElement.querySelectorAll('.term-chip');

    expect(categories.length).toBe(4);
  });

  it('should show the category terms when a category is selected', () => {
    const firstCategory = fixture.nativeElement.querySelector('.term-chip') as HTMLButtonElement;

    firstCategory.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.selected-term-label')?.textContent).toContain('獲利能力');
    expect(fixture.nativeElement.querySelectorAll('.definition-entry').length).toBe(3);
    expect(fixture.nativeElement.querySelector('.definition-card h2')?.textContent).toContain('ROA');
  });

  it('should collapse and expand the sidebar', () => {
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
});
