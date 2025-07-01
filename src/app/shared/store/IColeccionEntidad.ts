import { IFiltro } from "../model/EstruturasPaginacion/IFiltro";
import { IOrden } from "../model/EstruturasPaginacion/IOrden";
import { IPaginacion } from "../model/EstruturasPaginacion/IPaginacion";

export interface IContextoColeccionEntidad<T> {
    coleccionEntidad: T[],
    filtros: IFiltro[],
    orden: IOrden[]
    paginacion: IPaginacion,
}