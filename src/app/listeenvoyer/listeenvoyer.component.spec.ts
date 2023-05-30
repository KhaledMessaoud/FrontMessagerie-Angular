import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeenvoyerComponent } from './listeenvoyer.component';

describe('ListeenvoyerComponent', () => {
  let component: ListeenvoyerComponent;
  let fixture: ComponentFixture<ListeenvoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeenvoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeenvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
