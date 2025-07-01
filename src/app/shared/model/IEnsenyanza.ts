import { Cadena, CadenaAdmNulo, Numero } from "./TTipos";

export interface IEnsenyanza {
    idEnsenyanza: Cadena, // Identificador de la enseñanza en Pincel
    idEnsenyanzaSC: Numero, // Identificador de la enseñanza en el Plan de Estudios de Canarias
    codigo: Cadena
    denominacion: Cadena,
}