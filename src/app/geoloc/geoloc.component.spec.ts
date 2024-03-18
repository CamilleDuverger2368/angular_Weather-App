import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocComponent } from './geoloc.component';

describe('GeolocComponent', () => {
  let component: GeolocComponent;
  let fixture: ComponentFixture<GeolocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeolocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeolocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
