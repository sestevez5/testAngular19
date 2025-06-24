/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CabeceraGestionAlumnadoComponent } from './cabeceraGestionAlumnado.component';

describe('CabeceraGestionAlumnadoComponent', () => {
  let component: CabeceraGestionAlumnadoComponent;
  let fixture: ComponentFixture<CabeceraGestionAlumnadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraGestionAlumnadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraGestionAlumnadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
