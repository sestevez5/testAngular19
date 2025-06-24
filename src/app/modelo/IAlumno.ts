import { IPersona } from "./IPersona";
import { Cadena, CadenaAdmNulo, Numero } from "./TTipos";

export interface IAlumno extends IPersona {
    idAlumnoDA: Numero,  // Identificador del alumno en el Directorio del Alumnado
    cial: Cadena,
    nifnie: CadenaAdmNulo,
}