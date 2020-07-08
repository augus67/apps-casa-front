import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../tiendas/tienda';

@Injectable({providedIn: 'root'})
export class TiendaService {

  constructor(private http: HttpClient) { }

  getTiendas() {
    return this.http.get<Array<Tienda>>('http://localhost:8080/tiendas');
  }
}
