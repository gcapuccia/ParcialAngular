import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nacion } from 'src/app/model/Nacion';
import { Nombre } from 'src/app/model/Nombre';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  public tipoNombre: any;
  //public tipoNombre: Nombre[];

  //public tipoNacion: Nacion[];
  public tipoNacion: any;

  public NombreCompleto = this.route.snapshot.params["name"];

  constructor(public loginService: LoginService, private route: ActivatedRoute){


  }


  ngOnInit(): void {
    if (typeof this.NombreCompleto === "string" && this.NombreCompleto.length > 0) {
      var firstName = this.NombreCompleto.split(" ")[0];
      console.log(firstName);
      this.loginService.getTipoNombre(firstName).subscribe(
        data => {
          this.tipoNombre = data;
          console.log(this.tipoNombre);
          },
          err => { console.log(err); })

      this.loginService.getTipoNacion(firstName).subscribe(
        data => {
          this.tipoNacion = data;
          console.log(this.tipoNacion);
        },
        err => { console.log(err); })
    }




  }

  



}
