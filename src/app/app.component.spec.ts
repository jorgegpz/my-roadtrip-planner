import { TestBed } from '@angular/core/testing';
import { RtpComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtpComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RtpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
