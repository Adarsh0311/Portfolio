import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('creates the portfolio', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the owner and professional positioning', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Adarsh Kumar');
    expect(page.textContent).toContain('Backend & Full-Stack Software Engineer');
  });

  it('offers contact without a resume download', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('a[href="mailto:adarshghai6@gmail.com"]')).toBeTruthy();
    expect(page.querySelector('a[href$=".pdf"]')).toBeNull();
    expect(page.textContent?.toLowerCase()).not.toContain('resume');
  });
});
