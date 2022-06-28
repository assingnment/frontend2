import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChmeComponent } from './chme.component';

describe('ChmeComponent', () => {
  let component: ChmeComponent;
  let fixture: ComponentFixture<ChmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
