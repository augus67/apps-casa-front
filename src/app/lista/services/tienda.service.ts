import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Tienda } from '../tiendas/tienda';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class TiendaService {

  private tiendasUrl: string;

  constructor(private http: HttpClient) {
    this.tiendasUrl =  'http://localhost:8080/tiendas/';
  }

  getTiendas() {
    return this.http.get<Array<Tienda>>(this.tiendasUrl);
  }

  createTienda(t: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.tiendasUrl, t);
  }

  updateTienda(idTienda: number, tienda: Tienda){
    return this.http.put<Tienda>(this.tiendasUrl + idTienda, tienda);
  }

  borrarTiendaOld(t: Tienda){
    return this.http.delete(this.tiendasUrl + t.idTienda);
  }

  borrarTienda(t: Tienda): Observable<HttpResponse<Object>>{
    return this.http.delete(this.tiendasUrl + t.idTienda, {observe: 'response'})
  }

}
