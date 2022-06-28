import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaccComponent } from './coacc.component';

describe('CoaccComponent', () => {
  let component: CoaccComponent;
  let fixture: ComponentFixture<CoaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
