import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginicialComponent } from './paginicial.component';

describe('PaginicialComponent', () => {
  let component: PaginicialComponent;
  let fixture: ComponentFixture<PaginicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
