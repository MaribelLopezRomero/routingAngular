import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceEmpleadoService } from '../data-service-empleado.service';
import { Empleado } from '../home/empleadoModel';
import { ServicioDirectivasEmpleadosService } from '../servicio-directivas-empleados.service';

@Component({
  selector: 'app-actualiza-query-params',
  templateUrl: './actualiza-query-params.component.html',
  styleUrls: ['./actualiza-query-params.component.css']
})
export class ActualizaQueryParamsComponent {

    //QUEREMOS ENROUTAR, ASIQEU HAY QUE INYECTAR EL SERVICIO ROUTER

    constructor(private router:Router, private miServicio:ServicioDirectivasEmpleadosService, private servicioEmpleado:DataServiceEmpleadoService, private route:ActivatedRoute){ //parametros

      this.empleados=servicioEmpleado.empleados;
      this.indice=this.route.snapshot.params['id']; //ruta por parametros. Rescatar el parameto
      this.accion=this.route.snapshot.queryParams['accion'] //Recuperamos el parametro pasado por queryparams
  
      let empleado:Empleado=this.servicioEmpleado.encontrarEmpleado(this.indice); //guardo el empleado con ese id
  
      //Cargar el empleado en los input
  
      this.cuadroNombre=empleado.nombre;
      this.cuadroApellido=empleado.apellido;
      this.cuadroCargo=empleado.cargo;
      this.cuadroSalario=empleado.salario;

      //queryparams

     
  
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

    accion:string=""//queryparams
  
    

        actualizaEmpleado(){

          if(this.accion=="actualizar"){

            let nuevoEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  
            this.servicioEmpleado.actualizarEmpleado(nuevoEmpleado,this.indice);
            this.router.navigate(['']);


          }else if (this.accion="eliminar"){
            
            this.servicioEmpleado.eliminarEmpleado(this.indice);
            this.router.navigate(['']);
          }
 


      
  
  
    }


  

}
