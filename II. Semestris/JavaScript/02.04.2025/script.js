/*
function myFunction() // myFunction - nosaukums
{
 let h2_element = document.getElementById("h2_id") // Iekavas id kas ir vajadzīgs
 console.log(h2_element);
 let name_element = document.getElementById("Name_input")
 h2_element.innerText = "Hello, " + name_element.value + " !"; // += pieliek vel vārdus.
 //     email_element.value.match(/[!@]/)) ari strādā
}
*/
function myFunction()
{
 let h2_element = document.getElementById("h2_id")
 console.log(h2_element);
 let name_element = document.getElementById("name_input");
 let surname_element = document.getElementById("surname_input");
 let age_element = document.getElementById("age_input");
 let email_element = document.getElementById("email_input");
 let table_element = document.getElementById("myTable")
 
 if(name_element.value =="" ||   
   !name_element.value.match(/[A-z]/) || 
   name_element.value.match(/[0-9]/))
{
   console.error("Name contains invalid symbol!")
   return; 
}

if(surname_element.value =="" ||   
   !surname_element.value.match(/[A-z]/) || 
   surname_element.value.match(/[0-9]/))
{
   console.error("Surname contains invalid symbol!")
   return; 
}

if(age_element.value =="" ||   
   age_element.value.match(/[A-z]/) || 
   !age_element.value.match(/[0-9]/))
{
   console.error("Age contains invalid symbol!")
   return; 
}

if(email_element.value =="" ||
   !email_element.value.match(/[@]/))

{
   console.error("Email does not contain @ symbol!")
   return; 
}

h2_element.innerText = "Hello, " +
name_element.value + " " + surname_element.value + " " + age_element.value + " " + email_element.value;

let row = table_element.insertRow();
let cell1 = row.insertCell();
let cell2 = row.insertCell();
let cell3 = row.insertCell();

cell1.innerHTML = name_element.value;
cell2.innerHTML = surname_element.value;
cell3.innerHTML = email_element.value;


}




