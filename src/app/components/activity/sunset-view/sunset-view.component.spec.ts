import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetViewComponent } from './sunset-view.component';

describe('SunsetViewComponent', () => {
  let component: SunsetViewComponent;
  let fixture: ComponentFixture<SunsetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunsetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunsetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
