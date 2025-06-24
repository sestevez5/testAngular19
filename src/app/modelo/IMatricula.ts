import { IAlumno } from "./IAlumno";
import { ICentro } from "./ICentro";
import { IEstudio } from "./IEstudio";
import { Cadena, Numero } from "./TTipos";

export interface IMatricula {
    idMatricula: Cadena,
    fechaMatricula: Date,
    alumno: IAlumno,
    centro: ICentro,
    estudio: IEstudio
}