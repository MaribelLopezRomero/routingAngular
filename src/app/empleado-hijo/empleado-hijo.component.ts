import { Component, Input } from '@angular/core';
import { Empleado } from '../home/empleadoModel';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

}
