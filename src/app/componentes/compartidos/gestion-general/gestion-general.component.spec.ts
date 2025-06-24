import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGeneralComponent } from './gestion-general.component';

describe('GestionGeneralComponent', () => {
  let component: GestionGeneralComponent;
  let fixture: ComponentFixture<GestionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
