import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User , Address, Geo, Company } from 'src/app/model/User';
import { LoginService } from 'src/app/servicios/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private listaUsuarios: User[];

  LoginForm: FormGroup;

  constructor(public loginService: LoginService, private router: Router){

  
    this.LoginForm = new FormGroup ({
      usuario: new FormControl('', [Validators.email, Validators.required]),
      clave: new FormControl('',[Validators.required, Validators.minLength(5)])
      });

    loginService.getListaUsuarios().subscribe(
      data => { 
        this.listaUsuarios = data;
        console.dir(this.listaUsuarios);
      }
    );


  }

  EnviarFormulario(){

    const usuario = this.LoginForm.get('usuario')?.value;
    const clave = this.LoginForm.get('clave')?.value;

    if (this.LoginForm.valid){

      for (let i = 0; i < this.listaUsuarios.length; i++) {
        const mail = this.listaUsuarios[i].email;
        const pass = this.listaUsuarios[i].address.geo.lat;
        const name = this.listaUsuarios[i].name;
        console.log('usuarios:' + mail + ' => password: ' + pass);
        
          if (usuario == mail && clave == pass){
            console.warn("Usuario correcto");
            this.router.navigate(['/app/' + name]);
            break;
           } else {
            console.warn("Usuario INCORRECTO!");
          }
        

        }      
    }else{
      console.log(this.Controles);
      console.log(this.LoginForm);
    }
    
  }

  get Controles(){
    return this.LoginForm.controls;
  }







}
