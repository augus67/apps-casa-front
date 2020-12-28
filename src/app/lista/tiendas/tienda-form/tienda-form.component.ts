import { Component } from '@angular/core';
import { Tienda } from '../tienda';
import { TiendaService } from '../../services/tienda.service';


@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css'],
  providers: [TiendaService]
})


export class TiendaFormComponent {

  submitted = false;
  tienda = new Tienda();

  constructor(private service: TiendaService) {}


  validar(): boolean {
    if (!this.tienda.desTienda) {

      alert('Tienda sin datos');
      return false;

    } else {

      if (this.tienda.telefono) {

        const tamanyo: number = this.tienda.telefono.length;
        if (tamanyo > 12) {
          alert('El teléfono es demasiado largo');
          return false;
        }

        if (isNaN(Number(this.tienda.telefono))) {
          alert('El teléfono tiene que ser numérico');
          return false;
        }

      }
    }

    return true;

  }


  enviar() {
    if (this.validar()) {

      this.submitted = true;

      this.service.createTienda(this.tienda).subscribe(
          tienda => {
            this.tienda = tienda;
          },
          error => {
            console.log(error);
            alert('Error al crear la nueva tienda.');
          }
      );
    }

  }


}
