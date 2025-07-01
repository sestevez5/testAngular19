import { computed, effect, Injectable, Resource, Signal, signal } from '@angular/core';
import { IMatricula } from '../../model/IMatricula';
import { httpResource } from '@angular/common/http';
import { Cadena, CadenaAdmNulo } from '../../model/TTipos';
import { interval } from 'rxjs';
import { IPaginacion } from '../../model/EstruturasPaginacion/IPaginacion';
import { IOrden } from '../../model/EstruturasPaginacion/IOrden';
import { ColeccionAlumnadoComponent } from '../../../features/alumnado/coleccionAlumnado/coleccionAlumnado.component';

const SERVIDOR = 'https://wwwpre.educacion.org/educacion/bussed/apieduca'

const ENDPOINT_MATRICULAS = 'v1/gestionacadcentros/matriculas';

const ENDPOINT_FOTOS = 'v1/gestionacadcentros/alumnado/fotos';



@Injectable({
  providedIn: 'root'
})
export class AccesoApieducaService {

  apikey: string = '12D62B94-65CF-42E1-8E52-94EDE131E483'

  token: Signal<string | null> = signal(null);

  constructor() {

  }


  public obtenerMatriculas(): any {

    var resourceRef = httpResource<IDevolucionGetApiEduca>(() => ({
      url: SERVIDOR + '/' + ENDPOINT_MATRICULAS,
      method: 'GET',
      params: {
        opcion: 1,
        cursoEscolar: '2024',
        codigoCentro: '35010488',
        nivelDetalle: 'e'

      }

    }));

    effect(() => { console.log('resultado', resourceRef.value()) });



    const matriculas = computed<any>(
      () => {
        var datos: Object[] = resourceRef.value()?.datos || [];

        return datos.map((dato: any) => convertirDatoToMatricula(dato))
      }
    )

    effect(() => { console.log('matrículas', matriculas()) });

    return resourceRef
  }
}





function convertirDatoToMatricula(dato: any): IMatricula {

  const matricula: IMatricula =

  {
    idMatricula: dato.idMatricula,
    fechaMatricula: new Date(dato.fechaMatricula),
    cursoEscolar: dato.cursoCentro.cursoEscolar,
    alumno: {
      nombre: dato.alumno.nombre,
      primerApellido: dato.alumno.primerApellido,
      segundoApellido: dato.alumno.segundoApellido,
      sexo: dato.alumno.sexo,
      foto: null,
      nombreSentido: dato.alumno.nombreSentido,
      sexoSentido: dato.alumno.sexoSentido,
      cial: dato.alumno.cial,
      pasaporte: dato.alumno.pasaporte,
      nifnie: dato.alumno.nifni,
      correoElectronico: null,
      telefonoMovil: null,
      idAlumnoDA: ''
    },
    centro: {
      idCentroSC: dato.cursoCentro.idCentroSC,
      etapa: dato.cursoCentro.etapaCentro,
      denominacion: dato.cursoCentro.denominacionCentro,
      codigo: dato.cursoCentro.tipoCentro.codigoTipoCentro
    },
    estudio: {
      idEstudio: dato.estudio.idEstudio,
      idEstudioSC: dato.estudio.idEstudioSC,
      denominacion: dato.estudio.denominacionLarga,
      ensenyanza: {
        idEnsenyanza: dato.estudio.idEnsenyanza,
        idEnsenyanzaSC: dato.estudio.idEnsenyanzaSC,
        codigo: dato.estudio.codigoEnsenyanza,
        denominacion: dato.estudio.denominacionLargaEnsenyanza,
      }

    }
  }
  return matricula
}








interface IDevolucionGetApiEduca {
  datos: any,
  mensajes: IMensaje[]
  metadatos: IMetadatos
}

interface IMensaje {
  codMensaje: string,
  desMensaje: string,
  tipoMensaje: string
}

interface IMetadatos {
  fechaHoraPeticion: Date,
  usuario: string,
  observaciones: string,
  uriSolicitud: string
}