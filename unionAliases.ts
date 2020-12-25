type Combinable = number | string;

function combine( 
  x: Combinable, 
  y: Combinable, 
  resultConversion: 'number' | 'text'
  ) {
  let result: Combinable;
  if(resultConversion === 'number' || typeof x ==='number' && typeof y ==='number' ){
    result = +x + +y;
  }else {
    result = x.toString() + y;
  }
  return result;
}

console.log(combine(20,10, 'number'));

console.log(combine('Jon', ' Snow', 'text'));
console.log(combine('Jon', ' Snow', 'number'));
