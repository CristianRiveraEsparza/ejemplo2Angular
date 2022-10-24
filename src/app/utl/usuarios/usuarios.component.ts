import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  

  form = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(private formBuilder:FormBuilder) { }

  obtenerErrorNombre(){
    var nom=this.form.get('nombre');
    // var pass=this.form.get('password');
    if (nom?.hasError('required'))
    {
      return 'El campo es requerido'
    } 
    if (nom?.hasError('minlength'))
    {
      return 'mas datos bue'
    } 
    return '';
  }

  obtenerErroPassword(){
    var pass=this.form.get('password');
    if (pass?.hasError('required'))
    {
      return 'El campo es requerido'
    } 
    return '';
  }

  ngOnInit(): void {
  }

  guardarUsuario(){
    console.log('registro Guardado')
  }

}
