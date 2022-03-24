import { Component, OnInit } from '@angular/core';
import { MathOper } from './MyEnum';


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
  
  mathOper = MathOper;

  

  constructor() { }

  ngOnInit(): void {
    console.log(MathOper)
  }

  clearRezult (value:string): void {
    if (value === "clear"){
     
      this.numberOne = "";
      this.calcRezult = 0
      this.mathOperation = "";
      this.numberTwo = "";

    }
  }

  getValue (value:string) {
    
    if (this.calcRezult != 0 && (value ===  this.mathOper.Plus || value === this.mathOper.Minus || value === this.mathOper.Multipl || value === this.mathOper.Divide)){
        this.mathOperation = "";
        this.numberTwo = "";
        this.numberOne = this.calcRezult.toString();
  
    }

    if (this.mathOperation != "" && this.numberOne != "") {

      this.numberTwo += value;
    

    } else if (this.numberOne != "" && (value ===  this.mathOper.Plus || value === this.mathOper.Minus || value === this.mathOper.Multipl || value === this.mathOper.Divide) && this.numberTwo === "") {

      this.mathOperation = value;

    } else if (this.numberTwo === "") {
      this.numberOne += value;
      
    }
    
    
  }

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
 
  equalFun (value:string){
    if (value === "="){

      this.calcResult(this.numberOne, this.numberTwo, this.mathOperation);

    }
  }
  

}


