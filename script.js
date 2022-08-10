// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafo = document.querySelector('.parrafo');
// const p_id = document.querySelector('#p_id');
// const input = document.querySelector('input');

// console.log({
//     h1,
//     p,
//     parrafo,
//     p_id,
//     input
// });

// console.log(h1);
// console.log(input.value);


// // cambiar html desde js
// // h1.innerHTML = 'Del cierlo cayo <br> un panuelo';
// h1.innerText = 'Del cierlo cayo <br> un panuelo';

// // Acceder a clase de cualquier elemento
// console.log(h1.getAttribute('pantalla'));
// console.log(parrafo.getAttribute('class'));

// // modificar atributos de elementos html
// h1.setAttribute('class', 'asus')

// // modificar class de elementos html
// // add = agregar, no cambiar
// h1.classList.add('acer');
// // remove = eliminar si lo tiene
// h1.classList.remove('acer');

// // modificar value de input
// input.value = "12345";

// // Crear elemento html desde js
// const imagen = document.createElement('img');
// imagen.setAttribute('src', './20220714_220850.jpg');
// console.log(imagen);

// p_id.innerHTML = "";
// p_id.append(imagen);

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaImputs;
}