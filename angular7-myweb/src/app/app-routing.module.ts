import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './home/home.component';
import { OtroRegistroComponent } from  './otro-registro/otro-registro.component';


const  routes:  Routes  = [
  {
  path:  'home',
  component:  HomeComponent
  },
  {
  path:  'otro-registro',
  component:  OtroRegistroComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
