import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAdd } from './boton-add';

describe('BotonAdd', () => {
  let component: BotonAdd;
  let fixture: ComponentFixture<BotonAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
