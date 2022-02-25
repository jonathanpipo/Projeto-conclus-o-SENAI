import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamespagComponent } from './gamespag.component';

describe('GamespagComponent', () => {
  let component: GamespagComponent;
  let fixture: ComponentFixture<GamespagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamespagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamespagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
