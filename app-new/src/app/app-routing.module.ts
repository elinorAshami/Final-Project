import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent } from "./index/index.component";
import { BandComponent} from "./band/band.component";

const routes: Routes = [
  { path: '' , redirectTo: '/index' , pathMatch:'full'},
  { path: 'index' , component: IndexComponent },
  { path: 'band' , component: BandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
