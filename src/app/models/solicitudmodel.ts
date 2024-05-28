import { Arrendatario } from "./arrendatariomodel";
import { Propiedad } from "./propiedadmode";

export interface SolicitudArriendo {
    id?: number;
    fechainicio: string;
    fechafin: string;
    cantidadPersonas: number;
    estado: boolean;
    arrendatario: Arrendatario
    propiedad: Propiedad
}