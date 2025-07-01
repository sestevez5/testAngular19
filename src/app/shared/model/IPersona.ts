import { Cadena, CadenaAdmNulo } from "./TTipos";

export interface IPersona {
    nombre: Cadena,
    primerApellido: Cadena,
    segundoApellido: CadenaAdmNulo,
    sexo: string,
    foto: CadenaAdmNulo,
    correoElectronico: CadenaAdmNulo,
    telefonoMovil: CadenaAdmNulo,
    pasaporte: string
}