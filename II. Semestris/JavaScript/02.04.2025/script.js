/*
function myFunction() // myFunction - nosaukums
{
 let h2_element = document.getElementById("h2_id") // Iekavas id kas ir vajadzīgs
 console.log(h2_element);
 let name_element = document.getElementById("Name_input")
 h2_element.innerText = "Hello, " + name_element.value + " !"; // += pieliek vel vārdus.

}
*/
function myFunction() // myFunction - nosaukums
{
 let h2_element = document.getElementById("h2_id")
 console.log(h2_element);
 let name_element = document.getElementById("name_input");
 let surname_element = document.getElementById("surname_input");
 let age_element = document.getElementById("age_input");
h2_element.innerText = "Hello, " +
name_element.value + " " + surname_element.value + " "
 + age_element.value;
}




