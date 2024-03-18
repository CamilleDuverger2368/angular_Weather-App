import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryInformationsComponent } from './secondary-informations.component';

describe('SecondaryInformationsComponent', () => {
  let component: SecondaryInformationsComponent;
  let fixture: ComponentFixture<SecondaryInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
