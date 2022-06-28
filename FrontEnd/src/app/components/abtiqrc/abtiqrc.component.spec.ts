import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtiqrcComponent } from './abtiqrc.component';

describe('AbtiqrcComponent', () => {
  let component: AbtiqrcComponent;
  let fixture: ComponentFixture<AbtiqrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtiqrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtiqrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
