import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iqac5Component } from './iqac5.component';

describe('Iqac5Component', () => {
  let component: Iqac5Component;
  let fixture: ComponentFixture<Iqac5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iqac5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iqac5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
