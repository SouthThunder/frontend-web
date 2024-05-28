import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArrendatarioComponent } from './profile-arrendatario.component';

describe('ProfileArrendatarioComponent', () => {
  let component: ProfileArrendatarioComponent;
  let fixture: ComponentFixture<ProfileArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
