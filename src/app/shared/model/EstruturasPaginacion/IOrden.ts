import { Cadena, Numero } from "../TTipos";

type TipoOrden = "Asc" | "Des"

export interface IOrden {
    campo: Cadena,
    tipoOrden: TipoOrden
}



