import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiragComponent } from './antirag.component';

describe('AntiragComponent', () => {
  let component: AntiragComponent;
  let fixture: ComponentFixture<AntiragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
