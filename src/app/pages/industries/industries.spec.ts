import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Industries } from './industries';

describe('Industries', () => {
  let component: Industries;
  let fixture: ComponentFixture<Industries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Industries],
    }).compileComponents();

    fixture = TestBed.createComponent(Industries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sample industries and their descriptions', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.term-chip').length).toBe(3);
    expect(compiled.querySelector('.term-chip')?.textContent).toContain('半導體');

    (compiled.querySelector('.term-chip') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('半導體');
    expect(compiled.querySelector('.definition-card p')?.textContent).toContain('資本支出');
  });
});
