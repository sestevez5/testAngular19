import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '../../../shared/store/store';

@Component({
  selector: 'app-gestion-general',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './gestion-general.component.html',
  styleUrl: './gestion-general.component.scss'
})
export class GestionGeneralComponent {

  readonly x = inject(Store);




  color = "#157846";

  style = { 'background': `linear-gradient(to right, ${this.color} ,#fff )` }

  constructor() {
    console.log('gestionActiva', this.x.gestionActiva())
  }

}
