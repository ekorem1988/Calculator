import { Component, OnInit } from '@angular/core';
import { MathOper, checkEqual, checNotkEqual } from './MyEnum';


@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css']
})


export class MyCalcComponent  implements OnInit {
  
  listOfoNumbers = [7,8,9,4,5,6,1,2,3,0];

  numberOne = "";
  mathOperation = "";
  numberTwo = "";
  calcRezult = 0;
  inputField = "";

  
  mathOper = MathOper;

  

  constructor() { }

  ngOnInit(): void {
    
  }

 


  clearRezult (clearBtn:string): void {
    if (clearBtn === "clear"){
     
      this.numberOne = "";
      this.calcRezult = 0
      this.mathOperation = "";
      this.numberTwo = "";
      this.inputField = "";

    }
  }

  getInputValue (inputValue:any) {
    this.inputField = inputValue.target.value;

    
  }

  getValue (btnValue:string) {

    this.inputField  += btnValue;

    /**if (this.calcRezult != 0 && btnValue === checkEqual(btnValue)){
        
        this.mathOperation = "";
        this.numberTwo = "";
        this.numberOne = this.calcRezult.toString();
    }

    if (this.mathOperation != "" && this.numberOne != "" && checNotkEqual(btnValue)) {

      this.numberTwo += btnValue;
    

    } else if (this.numberOne != "" && btnValue === checkEqual(btnValue) && this.numberTwo === "") {

      this.mathOperation = btnValue;

    } else if (this.numberTwo === "" && checNotkEqual(btnValue)) {
      this.numberOne += btnValue;
    }
    **/
    
  }

  /** 
  calcResult (x:string, y:string, oper:string) {
    var num1 = parseFloat(x);
    var num2 = parseFloat(y);
 
    if (oper === "+"){

      this.calcRezult = num1 + num2
      
    } else if (oper === "-"){

      this.calcRezult = num1 - num2
     
    } else if (oper === "*"){

      this.calcRezult = num1 * num2
      
    } else if (oper === "/"){

      this.calcRezult = num1 / num2
      
    }
  
  }
  **/
 
  equalFun (btnEqual:string){

    /** 
    if (btnEqual === "=" && this.inputField === ""){

      this.calcResult(this.numberOne, this.numberTwo, this.mathOperation);

    }else{
      const inputRez = eval(this.inputField)
      this.calcRezult =  inputRez;
    }
    **/
      const inputRez = eval(this.inputField)
      this.calcRezult =  inputRez;

  }
  

}


