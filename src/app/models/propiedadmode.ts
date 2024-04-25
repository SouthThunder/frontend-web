import { Arrendador } from "./arrendadormodel";
import { SolicitudArriendo } from "./solicitudmodel";

export interface Propiedad{
    id?: number;
    nombre: string;
    descripcion: string;
    valor: number;
    estado: boolean;
    arrendador:Arrendador;
    solicitudes: number[]
}