import { signalStore, withComputed, withState } from '@ngrx/signals'
import { IGestion } from "../model/IGestion"
import { IMatricula } from '../model/IMatricula';
import { computed } from '@angular/core';
import { IContextoColeccionEntidad } from './IColeccionEntidad';
import { IDocente } from '../model/IDocente';

type State = {
    gestionActiva: IGestion | null;
    cargando: boolean,
    matriculas: IContextoColeccionEntidad<IMatricula> | null
    docentes: IContextoColeccionEntidad<IDocente> | null
}

const initialState: State = {
    gestionActiva: null,
    cargando: false,
    matriculas: null,
    docentes: null
}

export const Store = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((state) => ({
        totalMatriculas: computed(() => state.matriculas.length)
    }))
)

