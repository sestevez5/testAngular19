import { IAlumno } from "./IAlumno";
import { ICentro } from "./ICentro";
import { IEstudio } from "./IEstudio";
import { Cadena, Numero } from "./TTipos";

export interface IMatricula {
    idMatricula: Cadena,
    fechaMatricula: Date,
    cursoEscolar: string,
    alumno: IAlumno,
    centro: ICentro,
    estudio: IEstudio
}