import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import { MessageService } from 'primeng/api';
import { CabeceraComponent } from "./componentes/compartidos/cabecera/cabecera.component";
import { PieComponent } from "./componentes/compartidos/pie/pie.component";
import { Store } from "./store/store"

import { JsonPipe } from '@angular/common';
import { AccesoApieducaService } from './servicios/acceso-apieduca.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CabeceraComponent, PieComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {





  readonly store = inject(Store);
  s = inject(AccesoApieducaService)

  constructor(private ms: MessageService) {

    setTimeout(() => {


      console.log('fff', this.s.token())

    }, 1000);


  }




}
