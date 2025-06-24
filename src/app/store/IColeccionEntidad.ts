import { IFiltro } from "./IFiltro";
import { IOrden } from "./IOrden";
import { IPaginacion } from "./IPaginacion";

export interface IContextoColeccionEntidad<T> {
    coleccionEntidad: T[],
    filtros: IFiltro[],
    orden: IOrden[]
    paginacion: IPaginacion,
}