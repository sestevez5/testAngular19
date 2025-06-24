
import { IEnsenyanza } from "./IEnsenyanza";
import { Cadena, CadenaAdmNulo, Numero } from "./TTipos";

export interface IEstudio {
    idEstudio: String,  // Identificador del estudio en Pincel
    idEstudioSC: Numero, // Identificador del estudio en el Plan de Estudios de Canarias
    denominacion: Cadena,
    ensenyanza: IEnsenyanza,

}