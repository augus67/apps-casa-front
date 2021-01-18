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

  tiendas: Array<Tienda>;
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
        if(error.name === "HttpErrorResponse") {
          this.mostrarNotificacion('error', 'No se ha podido obtener la lista de tiendas, la URL: ' + error.url + ' no está disponible.');
          console.log(error);
        } else {
          this.mostrarNotificacion('error', 'No se ha podido obtener la lista de tiendas. ' + error.message);
          console.log(error);
        }
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

  onRowEditInit(tienda: Tienda) {

  }

  onRowEditSave(tienda: Tienda) {

  }

  onRowEditCancel(tienda: Tienda, index: number) {

  }

}
