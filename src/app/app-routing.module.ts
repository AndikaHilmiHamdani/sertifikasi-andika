import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {path:'home',component:HomeComponent},
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'add-expenses',
    loadChildren: () => import('./pages/add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  },
  {
    path: 'detail-expense',
    loadChildren: () => import('./pages/detail-expense/detail-expense.module').then( m => m.DetailExpensePageModule)
  },
  {
    path: 'update-expense/:id',
    loadChildren: () => import('./pages/update-expense/update-expense.module').then( m => m.UpdateExpensePageModule)
  },
  {
    path: 'detail-income',
    loadChildren: () => import('./pages/detail-income/detail-income.module').then( m => m.DetailIncomePageModule)
  },
  {
    path: 'add-income',
    loadChildren: () => import('./pages/add-income/add-income.module').then( m => m.AddIncomePageModule)
  },
  {
    path: 'update-income/:id',
    loadChildren: () => import('./pages/update-income/update-income.module').then( m => m.UpdateIncomePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
