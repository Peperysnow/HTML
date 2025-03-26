let a = 0;
let b = 0;
let sym;
let result = 0;

while(true)
{
    a = parseFloat(prompt("Enter a: "));
    b = parseFloat(prompt("Enter b: "));
    if( typeof(a) == NaN || typeof(b) == NaN){
    alert("A or B is NAN");
    continue;
}
 sym = prompt("Enter operation: ");
 switch(sym)
 {
   case"+":
    result = a+b;
   break;

   case "-":
   result = a-b;
   break;

   case "/":
    if (b === 0){
    alert("Nevar dalīt ar 0")
    continue;
    }
   result = a/b;
   break;
   
   case "*":
    result = a*b;
    break;
    
}

alert("Result: "+result );
let temp = prompt("Continue? [Y/N]")
if( temp == "n")
{
    break;
}
}
