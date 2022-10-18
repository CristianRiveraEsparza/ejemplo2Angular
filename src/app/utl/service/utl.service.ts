import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl []=[
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

  get alumnosUtl():AlumnosUtl[]{
    return [...this.alumnosUtl];
  }

  constructor() { }
  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }
}
