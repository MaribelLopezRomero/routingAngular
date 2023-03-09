import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceEmpleadoService } from '../data-service-empleado.service';
import { Empleado } from '../home/empleadoModel';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  //QUEREMOS ENROUTAR, ASIQEU HAY QUE INYECTAR EL SERVICIO ROUTER

  constructor(private router:Router, private miServicio:ServicioDirectivasEmpleadosService, private servicioEmpleado:DataServiceEmpleadoService){

    this.empleados=servicioEmpleado.empleados;

  }

  volverHome(){

    this.router.navigate(['']);

  }

  //Constructor para los servicios:Inyectar el servicio



  titulo="Formulario de empleados";

  //Creamos un array de empelados vacio que se rellenara en el servicio y aqui recuperaremos la infromacion

  empleados:Empleado[]=[];

  //bananinbox

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  
  anadirEmpleado(){
    let nuevoEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //hacemos uso del servicio

    //Usamos el servicio para meter los datos que introducimos en el formulario al arrayempleados que esta en el servicio

    this.servicioEmpleado.agregarEmpleado(nuevoEmpleado);
    this.router.navigate(['']);

  }

}
