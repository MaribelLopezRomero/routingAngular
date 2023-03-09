import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceEmpleadoService } from '../data-service-empleado.service';
import { Empleado } from '../home/empleadoModel';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent {

  //QUEREMOS ENROUTAR, ASIQEU HAY QUE INYECTAR EL SERVICIO ROUTER

  constructor(private router:Router, private miServicio:ServicioDirectivasEmpleadosService, private servicioEmpleado:DataServiceEmpleadoService, private route:ActivatedRoute){ //parametros

    this.empleados=servicioEmpleado.empleados;
    this.indice=this.route.snapshot.params['id']; //ruta por parametros. Rescatar el parameto

    let empleado:Empleado=this.servicioEmpleado.encontrarEmpleado(this.indice); //guardo el empleado con ese id

    //Cargar el empleado en los input

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

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

  indice:number=0; //ruta por parametros

  
  actualizaEmpleado(){
    let nuevoEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //hacemos uso del servicio

    //Usamos el servicio para meter los datos que introducimos en el formulario al arrayempleados que esta en el servicio

    this.servicioEmpleado.actualizarEmpleado(nuevoEmpleado,this.indice);
    this.router.navigate(['']);

  }

  elimniarEmpleado(){

    
    this.servicioEmpleado.eliminarEmpleado(this.indice);
    this.router.navigate(['']);

  }


}
