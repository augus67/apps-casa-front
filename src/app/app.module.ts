import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { HomeComponent } from './home/home.component';
import { TiendaFormComponent } from './lista/tiendas/tienda-form/tienda-form.component';
import { TiendaGridComponent } from './lista/tiendas/tienda-grid/tienda-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './lista/comun/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    HomeComponent,
    TiendaFormComponent,
    TiendaGridComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
