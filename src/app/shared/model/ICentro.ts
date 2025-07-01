import { Cadena, Numero } from "./TTipos";

export interface ICentro {
    idCentroSC: Numero, // Identificador del centro en el Directorio de Centros
    denominacion: Cadena,
    etapa: Cadena,
    codigo: Cadena
}