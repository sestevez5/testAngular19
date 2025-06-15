import { Routes } from '@angular/router';
import { GestionAlumnadoComponent } from './gestiones/alumnado/gestionAlumnado/gestionAlumnado.component';
import { GestionDocentesComponent } from './gestiones/docentes/gestionDocentes/gestionDocentes.component';
import { InicioComponent } from './gestiones/home/inicio/inicio.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'alumnado', component: GestionAlumnadoComponent},
    {path:'docentes', component: GestionDocentesComponent},
    {path:'home', component: InicioComponent},

];
