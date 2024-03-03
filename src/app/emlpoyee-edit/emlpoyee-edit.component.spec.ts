import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmlpoyeeEditComponent } from './emlpoyee-edit.component';

describe('EmlpoyeeEditComponent', () => {
  let component: EmlpoyeeEditComponent;
  let fixture: ComponentFixture<EmlpoyeeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmlpoyeeEditComponent]
    });
    fixture = TestBed.createComponent(EmlpoyeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
