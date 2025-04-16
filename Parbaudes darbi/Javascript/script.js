let age = parseInt( prompt("Vecums: "));
let irPilsonis = true;
if(  (age >= 18) && (irPilsonis == true))
    {
       console.log('Var balstot!');
    }
    if( (age >= 18) &&  (irPilsonis != true))
    {
       console.log('Ir pilngadīgs, bet nav pilsonis'); 
    }
    if( (age < 18) && (irPilsonis == true))
    {
        console.log('Ir pilsonis, bet nav 18 gadi');
    }

    let vērtējums = parseInt(prompt("Vērtējums:(0-100) "));

    if (vērtējums >= 90 && vērtējums <= 100) {
        console.log('Izcili');
    } 
    else if (vērtējums >= 70 && vērtējums <= 89) {
        console.log('Labi');
    } 
    else if (vērtējums >= 50 && vērtējums <= 69) {
        console.log('Vidēji');
    } 
    else { 
        console.log('Slikti');
    }
    let arrey = [];
    arrey.push("Bilde");
    arrey.push("Skola");
    arrey.push("Maja");
    arrey.push("Foto");
    arrey.push("Šodien");
    
    
    /*
    for (let i = 0; i < arrey.length; i++) {
        console.log(arrey[i]);
    }
    */
    
    
    for (let i = arrey.length - 1; i >= 0; i--) {
        console.log(arrey[i]);
    }
