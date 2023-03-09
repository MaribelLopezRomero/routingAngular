export class Empleado {
    //propiedades

    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;


    //Constructor

    constructor (nombre:string, apellido:string, cargo:string, salario:number) {
        this.nombre=nombre;
        this.cargo=cargo;
        this.apellido=apellido;
        this.salario=salario;
    }
}