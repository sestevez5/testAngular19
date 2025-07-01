import { httpResource } from '@angular/common/http';
import { computed, effect, Injectable, signal, Signal } from '@angular/core';

const APIKEY = '12D62B94-65CF-42E1-8E52-94EDE131E483';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public token: Signal<string | null> = signal(null);
  constructor() {
    this.autenticar(APIKEY);

    //effect(() => console.log('token: ', this.token()))

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
        return res ? res['access_token'] : null;
      }
    )

    this.token = token;

    return computed<boolean>(() => token() == null)

  }



}
