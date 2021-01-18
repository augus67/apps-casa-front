import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { HomeComponent } from './home/home.component';
import { TiendaFormComponent } from './lista/tiendas/tienda-form/tienda-form.component';
import { TiendaGridComponent } from './lista/tiendas/tienda-grid/tienda-grid.component';
import { AlertComponent } from './lista/comun/alert/alert.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';




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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
