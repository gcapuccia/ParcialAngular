import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  { path: 'login', 
    component: LoginComponent
  },
  { path: 'app/:name', 
    component: HomeComponent
  },
  { 
    path: '**',
    component: AboutComponent
  }, 
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
