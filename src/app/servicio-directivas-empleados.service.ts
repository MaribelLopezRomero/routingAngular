import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDirectivasEmpleadosService {

  constructor() { }

  muestramensaje(mensaje:string){
    alert(mensaje);
  }
}
