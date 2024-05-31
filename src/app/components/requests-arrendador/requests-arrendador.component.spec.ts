import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsArrendadorComponent } from './requests-arrendador.component';

describe('RequestsArrendadorComponent', () => {
  let component: RequestsArrendadorComponent;
  let fixture: ComponentFixture<RequestsArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
