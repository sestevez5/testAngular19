import { Cadena, Numero } from "../modelo/TTipos";

type TipoOrden = "Asc" | "Des"

export interface IOrden {
    campo: Cadena,
    tipoOrden: TipoOrden
}



