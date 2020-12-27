import { Alert } from './../modelo/alert';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Alert;

  constructor() { }

  error(mensaje: string): Alert {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-danger alert-dismissible fade show';
    this.alert.tipo = 'Error: ';
    this.alert.mensaje = mensaje;
    return this.alert;
  }

  info(mensaje: string): Alert {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-info alert-dismissible fade show';
    this.alert.tipo = 'Info: ';
    this.alert.mensaje = mensaje;
    return this.alert;
  }

  warn(mensaje: string): Alert {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-warning alert-dismissible fade show';
    this.alert.tipo = 'Aviso: ';
    this.alert.mensaje = mensaje;
    return this.alert;
  }

  success(mensaje: string): Alert {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-success alert-dismissible fade show';
    this.alert.tipo = 'Aviso: ';
    this.alert.mensaje = mensaje;
    return this.alert;
  }

}
