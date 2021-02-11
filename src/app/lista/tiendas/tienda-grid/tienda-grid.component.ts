import { Component, Input, OnInit } from '@angular/core';

import { AlertService } from './../../services/alert.service';
import { TiendaService} from '../../services/tienda.service';

import { Tienda } from '../tienda';
import { Alert } from '../../modelo/alert';


@Component({
  selector: 'app-tienda-grid',
  templateUrl: './tienda-grid.component.html',
  styleUrls: ['./tienda-grid.component.css'],
  providers: [TiendaService, AlertService]
})

export class TiendaGridComponent implements OnInit {

  tiendas: Array<Tienda> = [];
  copiaTiendas: Array<Tienda> = [];
  alerts: Array<Alert>;
  alert: Alert;
  filas: number = 10;
  totalFilas: number;

  constructor(private service: TiendaService, private alertService: AlertService) {}

  ngOnInit() {
    this.getAllTiendas();
  }

  getAllTiendas() {
    this.service.getTiendas().subscribe(
      tiendas => {
        this.tiendas = tiendas;
        this.totalFilas = this.tiendas.length;
      },
      error => {
        // debugger;
        if(error.status === 0) {
          this.mostrarNotificacion('error', 'No se ha podido obtener la lista de tiendas, no hay respuesta del servidor.');
          console.log(error);
        } else {
          this.mostrarNotificacion('error', 'No se ha podido obtener la lista de tiendas. ' + error.message);
          console.log(error);
        }
      }
    );
  }

  onRowEditInit(tienda: Tienda) {
    // Como se pueden seleccionar varios registros en la grid, se van insertando en un array
    this.copiaTiendas.push(tienda);
  }

  onRowEditSave(tienda: Tienda) {
    this.service.updateTienda(tienda.idTienda, tienda).subscribe(
      tienda => {
        if(tienda){
          this.mostrarNotificacion('success', 'Se ha actualizado la tienda ' + tienda.desTienda + ' correctamente.')
        }
      },
      error => {
        this.mostrarNotificacion('error', 'No se ha podido modificar la tienda. ' + error.message);
        console.log(error);
      }
    );
  }

  onRowEditCancel(tienda: Tienda, index: number) {
    // Borramos el registro de la grid
    this.copiaTiendas.forEach(function(t, i, tiendas){
      if(t.idTienda === tienda.idTienda){
        delete tiendas[i];
      }
    });
  }

  onRowDelete(tienda: Tienda){
    this.service.borrarTienda(tienda).subscribe(
      response => {
        if(response.status === 200){
          this.mostrarNotificacion('success', 'Se ha borrado la tienda: ' + tienda.desTienda + ' correctamente.');
          this.getAllTiendas();
        }
      },
      error => {
        this.gestionarError(error);
      }
    );
  }


  mostrarNotificacion(tipoAlert: string, mensaje: string) {
    this.alerts = [];
    this.alert = this.alertService.generarAlert(tipoAlert, mensaje);
    this.alerts.push(this.alert);
    setTimeout(() => { this.borrarNotificacion(); }, 7000);
  }

  borrarNotificacion() {
    this.alerts = [];
  }

  gestionarError(error: any){
    let msg: string;

    if(error instanceof ErrorEvent){
      console.log(error);
      msg = 'Ha sucedido un error en la página, por favor, inténtelo más tarde';

    } else if(error.status === 404) {
      console.log(error);
      msg = 'El recurso solicitado no está disponible';

    } else {
      console.log(error);
      msg = 'Error al conectar con el servidor, por favor, inténtelo más tarde.';
    }
    this.mostrarNotificacion('error', msg);
    console.log(error);
  }


}
