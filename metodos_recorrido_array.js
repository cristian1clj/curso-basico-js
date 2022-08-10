var juegos = [
    {nombre: "god of war", precio: 170000},
    {nombre: "call of duty", precio: 140000},
    {nombre: "piko park", precio: 11000}
]


// Filter
// retorna los objetos que cumplan con la condicion del return
var juegosFiltrados = juegos.filter(function(juego){
    return juego.precio < 100000
});

// Map
// crea y retorna un arreglo de los valores especificados en el return
var juegos_nombres = juegos.map(function(juego){
    return juego.nombre;
});

// Find
// crea y retorna un arreglo con el primer objeto que cumple con la condicion del return
var encuentraJuego = juegos.find(function(juego){
    return juego.nombre === "call of duty";
});

// ForEach
// busca en el arreglo los datos que se especifiquen
juegos.forEach(function(juego){
    console.log(juego.nombre);
});

// Some
// Retorna un booleano si al condicion del return se cumple
var juegosBaratos = juegos.some(function(juego){
    return juego.precio >= 100000;
});