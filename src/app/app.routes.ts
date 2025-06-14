import { Routes } from '@angular/router';
import { GestionAlumnadoComponent } from './gestiones/alumnado/gestionAlumnado/gestionAlumnado.component';
import { GestionDocentesComponent } from './gestiones/docentes/gestionDocentes/gestionDocentes.component';

export const routes: Routes = [
    {path:'', redirectTo: 'alumnado', pathMatch:'full'},
    {path:'alumnado', component: GestionAlumnadoComponent},
    {path:'docentes', component: GestionDocentesComponent}
];
