import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateIncomePage } from './update-income.page';

describe('UpdateIncomePage', () => {
  let component: UpdateIncomePage;
  let fixture: ComponentFixture<UpdateIncomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
