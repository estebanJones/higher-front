import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreCardComponent } from './membre-card.component';

describe('MembreCardComponent', () => {
  let component: MembreCardComponent;
  let fixture: ComponentFixture<MembreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
