// If
function condicional_if(a, b) {
    if(a < b) {
        console.log("correcto, "+ a +" es mayor que "+ b);
    
    } else if(a === b) {
        console.log("correcto, "+ a +" es igual a "+ b);

    } else {
        console.log("en realidad "+ a +" es menor que "+ b);
    }
}

var validacion = condicional_if(5, 4);


// Operador ternario
// condicion ? true : false;
function ternario(a, b) {
    var resultado = a >= b ? "El segundo numero es menor o igual" : "El primer numero es menor";
    console.log(resultado);
}

var validacion = ternario(5, 4);


// Switch
var num = 1;

switch(num) {
    case 1:
        console.log("Soy 1");
        break;
    
    case 2:
        console.log("Soy 2");
        break;
    
    case 3:
        console.log("Soy 3");
        break;
    
    case 4:
        console.log("Soy 4");
        break;

    default:
        console.log(`Soy ${num}`);
        break;
}