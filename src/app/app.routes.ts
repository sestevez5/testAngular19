import { Routes } from '@angular/router';
import { GestionAlumnadoComponent } from './componentes/gestiones/alumnado/gestionAlumnado/gestionAlumnado.component';
import { GestionDocentesComponent } from './componentes/gestiones/docentes/gestionDocentes/gestionDocentes.component';
import { InicioComponent } from './componentes/gestiones/home/inicio/inicio.component';
import { GestionGeneralComponent } from './componentes/compartidos/gestion-general/gestion-general.component';

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
