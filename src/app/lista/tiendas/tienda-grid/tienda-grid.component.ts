import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from '../tienda';
import { TiendaService} from '../../services/tienda.service';

@Component({
  selector: 'app-tienda-grid',
  templateUrl: './tienda-grid.component.html',
  styleUrls: ['./tienda-grid.component.css'],
  providers: [TiendaService]
})

export class TiendaGridComponent implements OnInit {

  tiendas: Array<Tienda>;

  constructor(private service: TiendaService) {}

  ngOnInit() {
    this.getAllTiendas();
  }

  getAllTiendas() {
    this.service.getTiendas().subscribe(
      tiendas => {
        this.tiendas = tiendas;
      },
      error => {
        alert('No se puede obtener la lista de Tiendas');
        console.log(error);
        console.log('TiendaGridComponent.getAllTiendas: Error al obtener las tiendas');
      }
    );
  }
}
