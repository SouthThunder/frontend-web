import { Arrendatario } from "./arrendatariomodel";
import { SolicitudArriendo } from "./solicitudmodel";

export interface Reviews{
    id?: number;
    comentario: string;
    puntuacion: number;
    solicitud_arriendo: number;
    arrendatario: number;
    
}