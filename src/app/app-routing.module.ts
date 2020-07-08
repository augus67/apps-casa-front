import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaFormComponent } from './lista/tiendas/tienda-form/tienda-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tiendas',
    component: TiendaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
