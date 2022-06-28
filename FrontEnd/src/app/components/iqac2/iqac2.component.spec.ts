import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iqac2Component } from './iqac2.component';

describe('Iqac2Component', () => {
  let component: Iqac2Component;
  let fixture: ComponentFixture<Iqac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iqac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iqac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
