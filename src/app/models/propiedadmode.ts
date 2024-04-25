import { Arrendador } from "./arrendadormodel";
import { SolicitudArriendo } from "./solicitudmodel";

export interface Propiedad{
    id?: number;
    nombre: string;
    descripcion: string;
    valor: number;
    estado: string;
    piscina: boolean;
    banos:number;
    habitaciones:number;
    asador:boolean;
    mascotas:boolean;
}