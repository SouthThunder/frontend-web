import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrentalapplicationComponent } from './payrentalapplication.component';

describe('PayrentalapplicationComponent', () => {
  let component: PayrentalapplicationComponent;
  let fixture: ComponentFixture<PayrentalapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrentalapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayrentalapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
