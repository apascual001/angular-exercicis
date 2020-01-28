import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroRegistroComponent } from './otro-registro.component';

describe('OtroRegistroComponent', () => {
  let component: OtroRegistroComponent;
  let fixture: ComponentFixture<OtroRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
