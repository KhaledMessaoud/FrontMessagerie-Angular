import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerecusComponent } from './listerecus.component';

describe('ListerecusComponent', () => {
  let component: ListerecusComponent;
  let fixture: ComponentFixture<ListerecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerecusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
