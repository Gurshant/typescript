function add(x: number, y: number): number{
  return x+y;
}
function printResult(x: number): void{
  console.log("Result: "+ x);
}


// let combineValues: Function;
// combineValues = add;
// combineValues = printResult;

let combineValues: (a: number, b: number)=> number;

combineValues = add;
// combineValues = printResult;





function addAndHandle(x: number, y: number, cb: (num: number) => void){
  const result = x+y;
  cb(result);
}

addAndHandle(10,20, printResult);
