import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class Mascota {
  private apiUrl = `${environment.apiUrl}/mascotas`;

  constructor(private http: HttpClient) {}

  listarPorCliente(clienteId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, { withCredentials: true });
  }

  registrar(mascota: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mascota, { withCredentials: true });
  }
}
