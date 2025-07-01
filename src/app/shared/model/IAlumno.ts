import { IPersona } from "./IPersona";
import { Cadena, CadenaAdmNulo, Numero } from './TTipos';

export interface IAlumno extends IPersona {
    idAlumnoDA: Cadena
    cial: Cadena,
    nifnie: CadenaAdmNulo,
    nombreSentido: string,
    sexoSentido: string
}