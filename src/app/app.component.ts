import { Component } from '@angular/core';

import { Empleado } from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  EmpleadoArray: Empleado[]=[
    {id:1, cedula: "1088294972",nombre: "Diana" , telefono: (3145979820), competencia:"empatia"},
    {id:2, cedula: "1088294972",nombre: "Diana" , telefono: (3145979820), competencia:"empatia"},
    {id:3, cedula: "1088294972",nombre: "Diana" , telefono: (3145979820), competencia:"empatia"}
  ];

  selectedEmpleado: Empleado= new Empleado();

  Editar(empleado : Empleado) {
    this.selectedEmpleado = empleado;

  }

  agregarOeditar(){
    if(this.selectedEmpleado.id === 0){
      this.selectedEmpleado.id = this.EmpleadoArray.length + 1;
      this.EmpleadoArray.push(this.selectedEmpleado);

    }

    this.selectedEmpleado = new Empleado();
  }

  eliminar(){
    if(confirm('Estas seguro de eliminar el registro?')){

      this.EmpleadoArray = this.EmpleadoArray.filter( x => x != this.selectedEmpleado);
      this.selectedEmpleado = new Empleado();

    }

  }


}
