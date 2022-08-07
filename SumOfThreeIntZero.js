const arr = [-3,-1,-7,-4,-5,9,10,-2,-6,8];
for(i = 0; i<arr.length; i++)
{
   // console.log(arr);
    const firstNumber = arr[i];
    for(let j = i +1;j<arr.length;j++)
    {    
        const secondNumber = arr[j];
        for(let k = j +1;k<arr.length;k++)
        {
            const thirdNumber = arr[k];
            let sum = firstNumber+secondNumber+ thirdNumber;
            if (sum == 0)
            {
                console.log(firstNumber+" "+ secondNumber + " "+ thirdNumber);
            }
        }
    }
}