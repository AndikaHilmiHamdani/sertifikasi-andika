import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailIncomePage } from './detail-income.page';

describe('DetailIncomePage', () => {
  let component: DetailIncomePage;
  let fixture: ComponentFixture<DetailIncomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
