import { Routes } from '@angular/router';
import { GestionAlumnadoComponent } from './features/alumnado/gestionAlumnado/gestionAlumnado.component';
import { GestionDocentesComponent } from './features/docentes/gestionDocentes/gestionDocentes.component';
import { InicioComponent } from './features/home/inicio/inicio.component';
import { GestionGeneralComponent } from './shared/componentes/gestion-general/gestion-general.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: InicioComponent },


    {
        path: 'subsistemas', component: GestionGeneralComponent, children: [
            { path: "", redirectTo: 'alumnado', pathMatch: 'full' },
            { path: "alumnado", component: GestionAlumnadoComponent },
            { path: "docentes", component: GestionDocentesComponent }


        ]
    },



];
