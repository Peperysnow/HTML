//alert("Hello World!");
//console.log("Hello World!");
/*
let x=parseInt (prompt("Enter x"));
let y = 10;
console.log(x+y);
let result= x + y - 2 * 10;
console.log(result);
*/


/*
let a = 1;
let b = 10;
if (a > b){
 console.log("a > b");
}else if ( a == b){

 console.log("a ir vienāds b");
} else {
    console.log("a < b")
}
*/
/*
let user= parseInt(prompt("Enter number: "));

if (user > 0)
    {
     console.log("Pozitīvs");
    }
 else if (user < 0)
{
 console.log("Negatīvs");
} else
{
 console.log("Ir vienāds ar 0");
}
let result = 0.5 - 0.5;
*/

let age = parseInt( prompt("Age: "));
let pilsoniba = true;
if(  (age >= 18) && (pilsoniba == true))
{
   console.log('Var balstot!');
}
if( (age >= 18) &&  (pilsoniba != true))
{
   console.log('Ir pilngadīgs, bet nav pilsonis'); 
}
if( (age < 18) && (pilsoniba == true))
{
    console.log('Ir pilsonis, bet nav 18 gadi');
}