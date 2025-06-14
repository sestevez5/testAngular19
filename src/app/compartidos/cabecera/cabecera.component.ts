import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule} from 'primeng/iconfield';
import  { InputIconModule } from 'primeng/inputicon';
import  { InputTextModule } from 'primeng/inputtext';
import  {SplitButtonModule } from 'primeng/splitbutton'
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
  imports:[ToolbarModule, ButtonModule, IconFieldModule, SplitButtonModule, InputIconModule, InputTextModule]
})
export class CabeceraComponent implements OnInit {
  
     items: MenuItem[] | undefined;

  constructor() { }

  ngOnInit() {

       this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
  }

}
