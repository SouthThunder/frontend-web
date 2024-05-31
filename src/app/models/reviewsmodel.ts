import { SolicitudArriendo } from "./solicitudmodel";

export interface Reviews{
    id?: number;
    comentario: string;
    puntuacion: number;
    solicitudArriendo: {
        id: number;
    }
}