import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyCalcComponent } from './my-calc/my-calc.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgModel
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
