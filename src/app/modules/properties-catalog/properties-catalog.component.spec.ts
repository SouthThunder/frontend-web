import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCatalogComponent } from './properties-catalog.component';

describe('PropertiesCatalogComponent', () => {
  let component: PropertiesCatalogComponent;
  let fixture: ComponentFixture<PropertiesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertiesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
