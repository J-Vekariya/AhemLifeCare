import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicallianceComponent } from './strategicalliance.component';

describe('StrategicallianceComponent', () => {
  let component: StrategicallianceComponent;
  let fixture: ComponentFixture<StrategicallianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicallianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicallianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
