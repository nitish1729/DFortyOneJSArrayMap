// a. Generates 10 Random 3 Digit number.
console.log("a. Generates 10 Random 3 Digit number.");
let random;
for(i = 0; i<= 10; i++)
{
    random = Math.floor(Math.random() * 999) + 100;
    console.log(random);
}

// b.Store this random numbers into a array.
console.log("b.Store this random numbers into a array.");
const ARRAY_LENGTH = 10
const randomArray = []
for(let i = 0; i<ARRAY_LENGTH; i++) 
{
    randomArray.push(Math.floor(Math.random() * 900) + 100);
}
console.log(randomArray);

// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

//2.Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

console.log(randomArray.toString());
console.log("Sort the array and then find the 2nd largest and the 2nd smallest element.");
console.log("Sorting the  Array : "+randomArray.sort());
console.log("2nd largest element = "+randomArray.sort()[randomArray.length-2]);
console.log("2nd smallest element = " +randomArray.sort()[1]);
console.log("Reverse Array : "+randomArray.sort().reverse())
console.log("2nd largest element = "+randomArray.sort().reverse()[1])
console.log("2nd smallestelement = "+randomArray.sort().reverse()[randomArray.length-2]);
function findMaxNum(randomArray)
{
    let max = 0;
    for (let i = 0; i < randomArray.length; i++)
    {
        if(randomArray[i]> max)
        {
            max = randomArray[i];
        }
    }
    return max;
}
console.log("Largest element = "+findMaxNum(randomArray));


