import { Component, Inject, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import { MessageService } from 'primeng/api';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { PieComponent } from "../pie/pie.component";
import { Store } from "../../store/store"

import { JsonPipe } from '@angular/common';
import { AccesoApieducaService } from '../../services/apiEduca/matriculas.service'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CabeceraComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {

  readonly store = inject(Store);

  constructor(private ms: MessageService, auth: AuthService

  ) {



  }




}
