import { Component, OnInit } from '@angular/core';
import { MathOper} from './MyEnum';


@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css']
})
export class MyCalcComponent implements OnInit {
  
  readonly listOfoNumbers = [7,8,9,4,5,6,1,2,3,0];

  calcRezult: number = 0;
  inputField: string = "";

  readonly mathOper = MathOper;

  

  constructor() { }

  ngOnInit(): void {
    
  }


  clearRezult (): void {
    
      this.calcRezult = 0
      this.inputField = "";

  }

  getInputValue (inputValue:any) {

    this.inputField = inputValue.target.value;
    
  }

  getBtnValue (btnValue:string) {

    this.inputField  += btnValue;

  }

  equalFun (){

      const inputRez = eval(this.inputField)
      this.calcRezult =  inputRez;
  }

}



