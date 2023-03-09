import { Component } from '@angular/core';
import { DataServiceEmpleadoService } from '../data-service-empleado.service';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';
import { Empleado } from './empleadoModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Constructor para los servicios:Inyectar el servicio

  constructor(private miServicio:ServicioDirectivasEmpleadosService, private servicioEmpleado:DataServiceEmpleadoService){
    //para poder rellenar el array empleados de este componente con el que se va creando en el servicio 
    this.empleados=servicioEmpleado.empleados;

  } 

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

    //this.miServicio.muestramensaje("nombre del empleado: " + nuevoEmpleado.nombre) //objeto.metodo

    //this.empleados.push(nuevoEmpleado);

    //Usamos el servicio para meter los datos que introducimos en el formulario al arrayempleados que esta en el servicio

    this.servicioEmpleado.agregarEmpleado(nuevoEmpleado);

  }


}
