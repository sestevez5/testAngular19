import { computed, Injectable, Resource, Signal, signal } from '@angular/core';
import { IMatricula } from '../modelo/IMatricula';
import { httpResource } from '@angular/common/http';
import { Cadena, CadenaAdmNulo } from '../modelo/TTipos';
import { interval } from 'rxjs';

const APIKEY = '';


const url = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class AccesoApieducaService {

  apikey: string = '12D62B94-65CF-42E1-8E52-94EDE131E483'

  token: Signal<string | null> = signal(null);

  constructor() {

    this.autenticar(this.apikey)

    console.log('constructor')


  }

  private autenticar(apikey: string): Signal<boolean> {

    var rec = httpResource<any>(() => ({
      url: 'https://wwwpre.educacion.org/educacion/bussed/apieduca/v1/seguridad/autenticacion-por-aplicacion',
      method: 'POST',
      body: {
        "apiKey": `${apikey}`
      }
    }));

    var token = computed<string | null>(
      () => {
        const res = rec.value() || null;
        console.log('res', res)

        return res ? res['access_token'] : null;
      }
    )

    this.token = token;

    return computed<boolean>(() => token() == null)

  }





  public obtenerMatriculas(): Signal<number> {


    var x = httpResource<any>(() => ({
      url: '',
      method: 'GET',
      headers: {
        Authorization: 'Bearer token'

      },
      params: {
        a: ''
      }

    }));

    var matriculas = computed<number>(
      () => {
        const res = x.value() || [];
        return res.map((res: any) => ({ x: res.id }))
      }
    )

    return matriculas
  }
}
