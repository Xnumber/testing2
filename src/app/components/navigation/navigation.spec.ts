import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../../app.routes';
import { Navigation } from './navigation';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;
  let originalInnerWidth: number;

  beforeEach(async () => {
    originalInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 600 });

    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalInnerWidth });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a link for each titled route', () => {
    const openButton = fixture.nativeElement.querySelector('.navigation-open-button') as HTMLButtonElement;

    openButton.click();
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('.navigation-link');

    expect(links.length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain('首頁');
    expect(fixture.nativeElement.textContent).toContain('相關名詞說明');
    expect(fixture.nativeElement.textContent).toContain('總覽');
  });

  it('should collapse and expand the route links', () => {
    expect(fixture.nativeElement.querySelectorAll('.navigation-link').length).toBe(0);

    const openButton = fixture.nativeElement.querySelector('.navigation-open-button') as HTMLButtonElement;
    expect(openButton).toBeTruthy();
    openButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.navigation-link').length).toBe(3);
    expect(fixture.nativeElement.querySelector('.navigation-open-button')).toBeNull();

    const toggle = fixture.nativeElement.querySelector('.navigation-toggle') as HTMLButtonElement;
    toggle.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.navigation-link').length).toBe(0);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(fixture.nativeElement.querySelector('.navigation-open-button')).toBeTruthy();
  });

  it('should default to expanded on wide screens', () => {
    fixture.destroy();
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1024 });

    fixture = TestBed.createComponent(Navigation);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.navigation-link').length).toBe(3);
    expect(fixture.nativeElement.querySelector('.navigation-open-button')).toBeNull();
  });

  it('should navigate to the previous and next routes with the bottom-right arrows', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/home');
    fixture.detectChanges();

    const next = fixture.nativeElement.querySelector('[aria-label="下一個頁面"]') as HTMLButtonElement;
    next.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe('/overview');

    const previous = fixture.nativeElement.querySelector('[aria-label="上一個頁面"]') as HTMLButtonElement;
    previous.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe('/home');
  });
});
