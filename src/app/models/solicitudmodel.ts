import { Arrendatario } from "./arrendatariomodel";

export interface SolicitudArriendo{
    id?: number;
    fechainicio: string;
    fechafin: string;
    cantidadPersonas: number;
    arrendatario: Arrendatario;
    estado: boolean;

}