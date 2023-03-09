import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { DataServiceEmpleadoService } from './data-service-empleado.service';
import { ServicioDirectivasEmpleadosService } from './servicio-directivas-empleados.service';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ActualizaQueryParamsComponent } from './actualiza-query-params/actualiza-query-params.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

//Array de tipo routes donde se almacenaran las routas. Es un array de objetos
const appRoutes: Routes=[
  {path:"", component:HomeComponent}, //ruta para home
  {path:"proyectos", component:ProyectosComponent},
  {path:"quienes", component:QuienesComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"actualiza/:id", component:ActualizaComponent}, //parametros
  {path:"actualizaQ/:id", component:ActualizaQueryParamsComponent}, //queryParams
  {path:"**", component:ErrorPersonalizadoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesComponent,
    ProyectosComponent,
    ContactoComponent,
    EmpleadoHijoComponent,
    ActualizaComponent,
    ActualizaQueryParamsComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //para rutas. Para indicarle que quiero usar esa contante en mi aplicacion para enrutar
  ],
  providers: [DataServiceEmpleadoService, ServicioDirectivasEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
