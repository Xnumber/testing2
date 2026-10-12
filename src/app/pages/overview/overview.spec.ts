import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overview } from './overview';

describe('Overview', () => {
  let component: Overview;
  let fixture: ComponentFixture<Overview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overview],
    }).compileComponents();

    fixture = TestBed.createComponent(Overview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show both financial statement diagrams', () => {
    fixture.detectChanges();

    const images = (fixture.nativeElement as HTMLElement).querySelectorAll('img');

    expect(images.length).toBe(2);
    expect(images[0].getAttribute('src')).toBe('/images/financial-statements.jpg');
    expect(images[0].getAttribute('alt')).toContain('資產負債表');
    expect(images[1].getAttribute('src')).toBe('/images/financial-statements-flow.jpg');
    expect(images[1].getAttribute('alt')).toContain('現金流量表');
  });
});
