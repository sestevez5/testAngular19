import { Cadena, CadenaAdmNulo } from "./TTipos";

export interface IPersona {
    nombre: Cadena,
    primerApellido: Cadena,
    segundoApellido: CadenaAdmNulo,
    foto: CadenaAdmNulo,
    correoElectronico: CadenaAdmNulo,
    telefonoMovil: CadenaAdmNulo
}