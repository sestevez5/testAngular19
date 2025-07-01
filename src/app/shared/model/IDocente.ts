import { IPersona } from "./IPersona";
import { Cadena, CadenaAdmNulo } from "./TTipos";

export interface IDocente extends IPersona {
    nifnie: Cadena,
}