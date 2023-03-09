import { Injectable } from '@angular/core';
import { Empleado } from './home/empleadoModel';
import { ServicioDirectivasEmpleadosService } from './servicio-directivas-empleados.service';


@Injectable({
  providedIn: 'root'
})
export class DataServiceEmpleadoService {

  //Inyectar el servicio de la ventana emergente

  constructor(private servicioVentanaEmergente: ServicioDirectivasEmpleadosService) { }

  empleados:Empleado[]=[

    new Empleado("maribel", "lopez", "presidenta", 10000),
    new Empleado("rocio", "lopez", "subpresidenta", 10000),
    new Empleado("candela", "romero", "dueña", 10000),
  ];

  agregarEmpleado(empleado:Empleado){

    //usamos el servicio

    this.servicioVentanaEmergente.muestramensaje("El nombre del empleado que vas a añadir es: " + empleado.nombre)

    this.empleados.push(empleado);

  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado= this.empleados[indice]; //Busca la posicion del array. Que es el id

    return empleado;

  }

  actualizarEmpleado(empleado:Empleado, indice:number){

    this.empleados[indice].nombre=empleado.nombre;
    this.empleados[indice].apellido=empleado.apellido;
    this.empleados[indice].cargo=empleado.cargo;
    this.empleados[indice].salario=empleado.salario;
  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1)
    
  }

}
