var call_of_duty = {
    genero: "accion",
    anio_lanzamiento: 2022,
    idiomas: ["ingles", "espanol"],
    consolas: ["play station 4", "xbox one"],
    detallesJuego: function(){
        console.log(`Este es un juego de ${this.genero}, que salio el ${this.anio_lanzamiento}`);
    }
};

console.log(call_of_duty.genero);
console.log(call_of_duty.idiomas);
call_of_duty.detallesJuego();


// funcion constructora
function juego(genero, anio_lanzamiento, idiomas, consolas) {
    this.genero = genero;
    this.anio_lanzamiento = anio_lanzamiento;
    this.idiomas = idiomas;
    this.consolas = consolas;
}

var god_of_war = new juego();
god_of_war.genero = "accion";
god_of_war.anio_lanzamiento = 2020;
god_of_war.idiomas = ["ingles", "espanol"];
god_of_war.consolas = ["ps4", "xbox", "pc"];