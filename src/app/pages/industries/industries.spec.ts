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

  it('should show the six industries and update the selected industry without navigating', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/industries');
    await fixture.whenStable();

    expect(compiled.querySelectorAll('.term-chip').length).toBe(6);
    expect(compiled.querySelector('.term-chip')?.textContent).toContain('IC 設計');

    (compiled.querySelector('.term-chip') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelectorAll('.definition-entry').length).toBe(3);
    expect(compiled.querySelector('.definition-card h2')?.textContent).toContain('產品組合');
    expect(compiled.querySelector('.definition-card')?.textContent).toContain('市場需求');
    expect(router.url).toBe('/industries');
  });
});
