import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCalcComponent } from './my-calc/my-calc.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'calculator', component: MyCalcComponent }
  
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  