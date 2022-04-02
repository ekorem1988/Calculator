export enum MathOper {
  Multipl = "*",
  Divide = "/",
  Minus = "-",
  Plus = "+",
}




export function checkEqual(param: string) {
    if (param === MathOper.Plus || param === MathOper.Minus || param === MathOper.Multipl || param === MathOper.Divide) {
        return param
    }else{
        return 
    }
    
}

export function checNotkEqual(param: string) {
    if (param !== MathOper.Plus && param !== MathOper.Multipl && param !== MathOper.Divide) {
        return true
    }else{
        return false
    }
    
}
