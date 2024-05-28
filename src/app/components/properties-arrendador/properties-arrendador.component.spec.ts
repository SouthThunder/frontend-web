import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesArrendadorComponent } from './properties-arrendador.component';

describe('PropertiesArrendadorComponent', () => {
  let component: PropertiesArrendadorComponent;
  let fixture: ComponentFixture<PropertiesArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertiesArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
