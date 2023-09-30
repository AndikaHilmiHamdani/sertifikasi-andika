import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateExpensePageRoutingModule } from './update-expense-routing.module';

import { UpdateExpensePage } from './update-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateExpensePageRoutingModule
  ],
  declarations: [UpdateExpensePage]
})
export class UpdateExpensePageModule {}
