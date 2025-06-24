import { Cadena, Numero } from "./TTipos";

export interface ICentro {
    idCentro: Cadena,  // Identificador del centro en Pincel
    idCentroSC: Numero, // Identificador del centro en el Directorio de Centros
    denominacion: Cadena,
    etapa: Cadena,
    codigo: Cadena

}