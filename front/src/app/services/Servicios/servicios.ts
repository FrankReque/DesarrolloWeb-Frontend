import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

export interface Servicio {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = `${environment.apiUrl}/servicios`;

  constructor(private http: HttpClient) { }
  
  listarServicios(): Observable<any> {
    return this.http.get(this.apiUrl, { withCredentials: true });
  }

  crearServicio(servicio: Servicio): Observable<any> {
    return this.http.post(this.apiUrl, servicio, { withCredentials: true });
  }
}