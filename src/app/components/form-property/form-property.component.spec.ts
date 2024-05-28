import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropertyComponent } from './form-property.component';

describe('FormPropertyComponent', () => {
  let component: FormPropertyComponent;
  let fixture: ComponentFixture<FormPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
