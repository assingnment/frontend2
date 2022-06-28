import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iqac4Component } from './iqac4.component';

describe('Iqac4Component', () => {
  let component: Iqac4Component;
  let fixture: ComponentFixture<Iqac4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iqac4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iqac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
