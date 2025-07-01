import { CadenaAdmNulo, NumeroAdmNulo } from "./TTipos"

export interface ICriterioMatriculas {
    opcion: 1 | 2 | 3 | 4,
    cursoEscolar: CadenaAdmNulo,
    codigoCentro: CadenaAdmNulo,
    idEstudioSC: NumeroAdmNulo,
    codigoGrupo: CadenaAdmNulo,


}