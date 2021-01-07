import { Component, ViewChild } from '@angular/core';

import { Tienda } from '../tienda';
import { Alert } from '../../modelo/alert';

import { TiendaService } from '../../services/tienda.service';
import { AlertService } from './../../services/alert.service';

import { TiendaGridComponent } from './../tienda-grid/tienda-grid.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css'],
  providers: [TiendaService, AlertService]
})
export class TiendaFormComponent {

  submitted = false;
  tienda = new Tienda();
  alert: Alert;
  alerts: Array<Alert>;

  @ViewChild(TiendaGridComponent, {static: false})
  gridTiendas: TiendaGridComponent;

  constructor(private service: TiendaService, private alertService: AlertService) {}

  validar(): boolean {
    if (!this.tienda.desTienda || this.tienda.desTienda.trim().length == 0) {
      this.mostrarNotificacion('error', 'Tienda sin datos');
      return false;
    } else {
      if (this.tienda.telefono) {
        const tamanyo: number = this.tienda.telefono.length;
        if (tamanyo > 12) {
          this.mostrarNotificacion('error', 'El teléfono es demasiado largo.');
          return false;
        }

        if (isNaN(Number(this.tienda.telefono))) {
          this.mostrarNotificacion('error', 'El teléfono tiene que ser numérico.');
          return false;
        }
      }
    }
    return true;
  }

  enviar(tiendaForm: NgForm) {
    if (this.validar()) {
      this.submitted = true;
      this.service.createTienda(this.tienda).subscribe(
          tienda => {
            this.tienda = tienda;
            // Recargamos la grid con la nueva tienda
            this.gridTiendas.getAllTiendas();
            this.mostrarNotificacion('success', 'Se ha creado la tienda \"' + tienda.desTienda + '\" correctamente.');
            // Limpiamos los campos del formulario
            tiendaForm.reset();
          },
          error => {
            this.mostrarNotificacion('error', 'No se ha podido crear la tienda. No se puede conectar con el servidor');
            console.log(error);
          }
      );
    }
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

}
