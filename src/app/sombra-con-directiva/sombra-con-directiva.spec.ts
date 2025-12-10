import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SombraConDirectiva } from './sombra-con-directiva';

describe('SombraConDirectiva', () => {
  let component: SombraConDirectiva;
  let fixture: ComponentFixture<SombraConDirectiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SombraConDirectiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SombraConDirectiva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
