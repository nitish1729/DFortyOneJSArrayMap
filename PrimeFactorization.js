// Extend the Prime Factorization Program to store all the Prime Factors of a
// number n into an array and finally display the output.

console.log("Prime Factorization");
let Number = 120;
for (let div = 2; div < Number; div++)
{
   while(Number % div ==0)
   {
    Number/=div;
    console.log(div);
   }
}
if(Number != 1)
{
    console.log(Number);
}

const randomArray = []
for(let i = 0; i<randomArray.length; i++) 
{
    randomArray.push(Number);
}
console.log(randomArray);