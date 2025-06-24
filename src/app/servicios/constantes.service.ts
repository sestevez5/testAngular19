import { Injectable } from '@angular/core';
import { IGestion } from '../modelo/IGestion';


@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  constructor() { }

  readonly GESTIONES: IGestion[] =
    [
      {
        nombre: "Alumnado",
        color: "#ACE7FF",
        orden: 1,
        icono: "pi-users",
        ruta: "subsistemas/alumnado"
      },
      {
        nombre: "Docentes",
        color: "#FFABAB",
        orden: 2,
        icono: "pi-graduation-cap",
        ruta: "subsistemas/docentes"

      },
      {
        nombre: "Planes de Estudio",
        color: "#BFFCC6",
        orden: 4,
        icono: "pi-map",
        ruta: "subsistemas/planes-estudios"
      },
      {
        nombre: "subsistemas/centros",
        color: "#BFFCC6",
        orden: 3,
        icono: "pi-building",
        ruta: ""
      }


    ]
}
