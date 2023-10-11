// Guardamos en una constante el elemento con el id 'agregar'.
const agregar = document.getElementById('agregar');

// Guardamos en una constante el primer elemento que coincida con el selector '#contenedor'
const contenedor = document.querySelector('#contenedor');



// Función que maneja el evento de clic en el botón 'Agregar'
function clickHandler(event) {

    // Guardamos en una constante un nuevo elemento div
    const newDiv = document.createElement('div');

    // Asignamos el contenido HTML del nuevo elemento div
    newDiv.innerHTML = 'Holis';

    // Asignamos la clase 'recuadroNegro' al nuevo elemento div
    newDiv.className = 'recuadroNegro';

    // Incorporamos el nuevo elemento div al elemento contenedor (un div padre)
    contenedor.appendChild(newDiv);

    // Agregamos un event listener, que al hacer click en el nuevo elemento, va a activar la función 'cambiarColor'
    newDiv.addEventListener('click', cambiarColor);
};


// Cambia el color del elemento clickeado entre 'recuadroNegro' y 'recuadroRojo'
function cambiarColor(event) {
    
    // Guardamos en una constante el elemento que disparó el evento
    const element = event.target;

    // Si la clase actual del elemento es 'recuadroNegro', se la cambiamos a 'recuadroRojo'
    if (element.className === 'recuadroNegro') element.className = 'recuadroRojo';

    // En caso contrario, pasamos de 'recuadroRojo' a 'recuadroNegro'.
    else element.className = 'recuadroNegro';
};

// Agregamos un event listener para ejecutar la función 'clickHandler' al hacer clic en el botón 'agregar'.
agregar.addEventListener('click', clickHandler);


