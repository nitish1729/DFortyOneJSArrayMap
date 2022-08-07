const arr = [10,5,13,40,60,];
// filter the odd value
function IsOdd(x)
{
    return x%2!=0;
    //return x%2;
}
const output = arr.filter(IsOdd);
console.log(output);

function check1(x1)
{
    return x1>15;
}
const output1 = arr.filter(check1);
console.log(output1);
const output2 = arr.filter((x1) => x1>10);
console.log(output2);






/*
Ctrl + shift + L;
Ctrl + G
Ctrl +B
ctrl + K +W
ctrl +/
ctrl + shift +F;
ctrl +k+s;
*/
// 