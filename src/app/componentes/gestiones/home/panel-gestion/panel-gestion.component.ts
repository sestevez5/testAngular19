import { Component, computed, input, OnInit, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-panel-gestion',
  imports: [],
  templateUrl: './panel-gestion.component.html',
  styleUrl: './panel-gestion.component.scss'
})
export class PanelGestionComponent implements OnInit {

  texto = input<string>();
  icono = input<string>();
  etiquetaIcono: Signal<string>;


  constructor() {
    this.etiquetaIcono = computed(() => "pi " + this.icono())

  }

  ngOnInit() {


  }




}
