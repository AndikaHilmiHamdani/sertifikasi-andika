import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailIncomePageRoutingModule } from './detail-income-routing.module';

import { DetailIncomePage } from './detail-income.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    DetailIncomePageRoutingModule
  ],
  declarations: [DetailIncomePage]
})
export class DetailIncomePageModule {}
