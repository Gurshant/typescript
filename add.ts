function add(n1: number, n2: number): number{
  return n1+ n2;
}

let arr =process.argv.slice(2);

console.log(add(+arr[0], +arr[1]))