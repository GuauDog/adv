import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultoriasPageRoutingModule } from './consultorias-routing.module';

import { ConsultoriasPage } from './consultorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultoriasPageRoutingModule
  ],
  declarations: [ConsultoriasPage]
})
export class ConsultoriasPageModule {}
