import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailIncomePage } from './detail-income.page';

const routes: Routes = [
  {
    path: '',
    component: DetailIncomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailIncomePageRoutingModule {}
