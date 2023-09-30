import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagePage } from './home-page.page';
import { AddExpensePage } from '../add-expense/add-expense.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: 'tab2',
        loadChildren: () =>
          import('../../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'add-expense',
        loadChildren: () => import('../add-expense/add-expense.module').then(m => m.AddExpensePageModule)
      },
      {
        path: 'detail-expense',
        loadChildren: () => import('../detail-expense/detail-expense.module').then(m => m.DetailExpensePageModule)
      },
      {
        path: 'add-income',
        loadChildren: () => import('../add-income/add-income.module').then(m => m.AddIncomePageModule)
      },
      {
        path: 'detail-income',
        loadChildren: () => import('../detail-income/detail-income.module').then(m => m.DetailIncomePageModule)
      },
    ],
  },
  {
    path: 'home-page/add-expenses',
    component: AddExpensePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
