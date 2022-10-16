import { Component, OnInit } from '@angular/core';
interface AlumnosUtl{
  nombre:string;
  edad:number;

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  alumnosUtl:AlumnosUtl []=[
    {
      nombre:'Danna',
      edad:20
    },
    {
      nombre:'Lau',
      edad:21
    },
    {
      nombre:'Fany',
      edad:21
    },
    {
      nombre:'Rivera',
      edad:20
    }
  ]
  regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }
    
    

  agregar(){
    this.alumnosUtl.push(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }


}
