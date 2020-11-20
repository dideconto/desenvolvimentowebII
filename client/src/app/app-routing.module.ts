import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCycleComponent } from './views/cycle/create-cycle/create-cycle.component';
import { DashboardCycleComponent } from './views/cycle/dashboard-cycle/dashboard-cycle.component';
import { ListCycleComponent } from './views/cycle/list-cycle/list-cycle.component';

//Auto import

const routes: Routes = [
  {
    path: '', 
    component: DashboardCycleComponent
  },
  {
    path: 'cycle/list', 
    component: ListCycleComponent
  },
  {
    path: 'cycle/create', 
    component: CreateCycleComponent
  },
  {
    path: 'cycle/create/:id', 
    component: CreateCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
