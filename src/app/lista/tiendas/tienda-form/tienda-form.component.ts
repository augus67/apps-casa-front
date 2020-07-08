import { Component } from '@angular/core';
import { Tienda } from '../tienda';

@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css']
})

export class TiendaFormComponent {

  submitted = false;
  tienda = new Tienda();

  constructor() {}

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
      this.tienda.fechaAlta = new Date();
      this.tienda.fechaUltMod = new Date();
      alert('La tienda se ha creado correctamente: ' + JSON.stringify(this.tienda));
    } else {
      alert('No se ha podido guardar la tienda');
    }

  }

}
