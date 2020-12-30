import { Alert } from './../modelo/alert';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Alert;

  constructor() { }

  error(mensaje: string) {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-danger alert-dismissible fade show';
    this.alert.tipo = 'Error: ';
    this.alert.mensaje = mensaje;
  }

  info(mensaje: string) {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-info alert-dismissible fade show';
    this.alert.tipo = 'Info: ';
    this.alert.mensaje = mensaje;
  }

  warn(mensaje: string) {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-warning alert-dismissible fade show';
    this.alert.tipo = 'Aviso: ';
    this.alert.mensaje = mensaje;
  }

  success(mensaje: string) {
    this.alert = new Alert();
    this.alert.estilo = 'alert alert-success alert-dismissible fade show';
    this.alert.tipo = 'Hecho: ';
    this.alert.mensaje = mensaje;
  }

  generarAlert(tipoAlert: string, mensaje: string): Alert {

    if(tipoAlert === 'error'){
      this.error(mensaje);
      return this.alert;
    }

    if(tipoAlert === 'warning'){
      this.warn(mensaje);
      return this.alert;
    }

    if(tipoAlert === 'info'){
      this.info(mensaje);
      return this.alert;
    }

    if(tipoAlert === 'success'){
      this.success(mensaje);
      return this.alert;
    }
  }

}
