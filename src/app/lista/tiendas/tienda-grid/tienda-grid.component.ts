import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private service: TiendaService, private alertService: AlertService) {}

  ngOnInit() {
    this.getAllTiendas();
  }

  getAllTiendas() {
    this.service.getTiendas().subscribe(
      tiendas => {
        this.tiendas = tiendas;
      },
      error => {
        // debugger;
        if(error.name === "HttpErrorResponse") {
          this.generarAlert('No se ha obtenido la lista de tiendas, no está disponible la URL: ' + error.url);
          console.log(error);
        } else {
          this.generarAlert('No se ha podido obtener la lista de tiendas. ' + error.message);
          console.log(error);
        }
      }
    );
  }

  generarAlert(mensaje: string) {
    this.alerts = [];
    this.alert = this.alertService.error(mensaje);
    this.alerts.push(this.alert);
  }

}
