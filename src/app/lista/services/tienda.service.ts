import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../tiendas/tienda';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TiendaService {

  private tiendasUrl: string;

  constructor(private http: HttpClient) {
    this.tiendasUrl =  'http://localhost:8080/tiendas';
  }

  getTiendas() {
    return this.http.get<Array<Tienda>>(this.tiendasUrl);
  }

  createTienda(t: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.tiendasUrl, t);
  }

}
