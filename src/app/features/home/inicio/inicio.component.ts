import { Component } from '@angular/core';
import { NgFor } from '@angular/common'
import { PanelGestionComponent } from '../panel-gestion/panel-gestion.component';
import { ConstantesService } from '../../../shared/services/constantes.service';
import { IGestion } from '../../../shared/model/IGestion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [NgFor, PanelGestionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {


  gestiones: IGestion[];
  constructor(private constantes: ConstantesService, private router: Router) {

    this.gestiones = constantes.GESTIONES.sort((a, b) => a.orden - b.orden);
  }

  onSeleccionarGestion(gestion: IGestion) {
    this.router.navigate([gestion.ruta]);
  }
}
