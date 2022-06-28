import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iqac3Component } from './iqac3.component';

describe('Iqac3Component', () => {
  let component: Iqac3Component;
  let fixture: ComponentFixture<Iqac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iqac3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iqac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
