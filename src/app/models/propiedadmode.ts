
export interface Propiedad{
    id?: number;
    nombre: string;
    descripcion: string;
    valor: number;
    estado: boolean;
    arrendador: number;
    solicitudes: number[]
    piscina: boolean;
    banos: number;
    habitaciones: number;
    asador: boolean;
    mascotas: boolean;
}