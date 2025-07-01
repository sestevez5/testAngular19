import { Component, inject, OnInit } from '@angular/core';
import { AccesoApieducaService } from '../../../shared/services/apiEduca/matriculas.service';
import { CabeceraGestionAlumnadoComponent } from '../cabeceraGestionAlumnado/cabeceraGestionAlumnado.component';

@Component({
  selector: 'app-gestionAlumnado',
  templateUrl: './gestionAlumnado.component.html',
  styleUrls: ['./gestionAlumnado.component.css'],
  imports: [CabeceraGestionAlumnadoComponent]
})
export class GestionAlumnadoComponent implements OnInit {


  constructor(api: AccesoApieducaService) {
    const x = api.obtenerMatriculas()


  }

  ngOnInit() {
  }

}
