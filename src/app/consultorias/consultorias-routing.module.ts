import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultoriasPage } from './consultorias.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultoriasPageRoutingModule {}
