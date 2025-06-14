import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import { MessageService } from 'primeng/api';
import { CabeceraComponent } from "./compartidos/cabecera/cabecera.component";
import { MenuLateralComponent } from "./compartidos/menuLateral/menuLateral.component";
import { PieComponent } from "./compartidos/pie/pie.component";
import { GestionAlumnadoComponent } from "./gestiones/alumnado/gestionAlumnado/gestionAlumnado.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Toast, ButtonModule, CabeceraComponent, MenuLateralComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {

  constructor(private ms: MessageService){}

   show() {
    this.ms.add({severity: 'info', summary: 'info', detail: ' Mensaje contenido', life: 3000})
  }



  
}
