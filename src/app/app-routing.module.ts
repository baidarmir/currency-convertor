import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyConvertorComponent} from './currency-convertor/currency-convertor.component'


const routes: Routes = [
  { path: 'currency', component: CurrencyConvertorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
