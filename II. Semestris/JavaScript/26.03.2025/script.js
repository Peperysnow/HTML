/*
let arr= [1,2,3,4,5];

for(let i= 0; i < 5; i++)
{
console.log(arr[i]);
}
*/

/*
let i=0
while(true)
{
    console.log(i);
    i++;
    if(i== 21)
    {
       break;
    }
}
/*

/*
let i=0
while(true)
if(i == 10)
{
        i++;   
        continue;
    
}

    if(i== 21)
    {
       break;
    }
    console.log(i)
    i++
}
*/

let user = true;
let array = [];
while(user)
{

let x = parseFloat(prompt("Enter number"));
if(x < 0)
{
 user = false;
continue;
}
array.push(x);
}
console.log(array);



let result = 0;
for(let i = 0; i < array.length ; i++)
{
    result += array[i];
}
result /= array.length;
console.log(result);