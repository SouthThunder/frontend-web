import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arrendatario } from '../../models/arrendatariomodel';

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {
  private urlApi= 'http://localhost:8080/arrendatario';
  constructor(private http: HttpClient) { }
  getArrendatarios(){ 
    return this.http.get<Arrendatario[]>(this.urlApi);
  }
  postArrendatario(arrendatario: Arrendatario){
    return this.http.post<Arrendatario>(this.urlApi, arrendatario);
  }
}
