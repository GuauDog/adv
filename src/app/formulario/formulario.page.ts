import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {

  constructor(private GnService: GeneralService,) { }

  alerta(){
    this.GnService.presentAlertErrorCampos('Solicitud Enviada');
  }

}
