import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { Industries } from './industries';

describe('Industries', () => {
  let component: Industries;
  let fixture: ComponentFixture<Industries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Industries],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Industries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the six industries and navigate to a selected page', async () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.term-chip').length).toBe(6);
    expect(compiled.querySelector('.term-chip')?.textContent).toContain('IC 設計');

    (compiled.querySelector('.term-chip') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('IC 設計');
    expect(TestBed.inject(Router).url).toBe('/ic-design');
  });
});
