import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailExpensePage } from './detail-expense.page';

describe('DetailExpensePage', () => {
  let component: DetailExpensePage;
  let fixture: ComponentFixture<DetailExpensePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
