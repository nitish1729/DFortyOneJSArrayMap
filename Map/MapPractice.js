const arr = [5,10,15,20,25];
function double(x)
{
    return x*2;
}
const output = arr.map(double);
console.log(output);

function triple(x1)
{
    return x1*3;
}
const output1 = arr.map(triple);
console.log(output1);

function binary(x2)  {

    return x2.toString();
}
const output2 = arr.map(binary);
console.log(output2);

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);


const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers1.map(myFunction)
function myFunction(xy) {
  return xy * 10;
}
const output5 = numbers1.map(myFunction);
console.log(output5);