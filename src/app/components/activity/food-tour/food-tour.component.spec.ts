import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTourComponent } from './food-tour.component';

describe('FoodTourComponent', () => {
  let component: FoodTourComponent;
  let fixture: ComponentFixture<FoodTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
