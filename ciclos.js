var comidas = ["pasta", "frijoles", "salchichas con vino", "pizza"];

function filtrarComidas(comida) {
    if (comida == "salchichas con vino") {
        console.log(`${comida} => No me gusta`);
        
    } else {
        console.log(`${comida} => me gusta`);
    }
}

// For forma 1
for (var i = 0; i < comidas.length; i++) {
    filtrarComidas(comidas[i]);
}

// For forma 2
for (var comida of comidas) {
    filtrarComidas(comida);
}

// While
var  i = 0;
while (comidas[i] != "salchichas con vino") {
    console.log(`${comidas[i]} => me gusta`);
    i++;
}
console.log(`Ya estoy lleno 9_9`);