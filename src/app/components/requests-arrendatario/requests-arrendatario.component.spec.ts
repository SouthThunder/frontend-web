import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsArrendatarioComponent } from './requests-arrendatario.component';

describe('RequestsArrendatarioComponent', () => {
  let component: RequestsArrendatarioComponent;
  let fixture: ComponentFixture<RequestsArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
