const agregar = document.getElementById('agregar');// Obtenemos el elemento con el id 'agregar' y lo asignamos a la constante 'agregar'
const contenedor = document.querySelector('#contenedor');// Seleccionamos el primer elemento que coincida con el selector '#contenedor' y lo asignamos a la constante 'contenedor'

// Función que maneja el evento de clic en el botón 'Agregar'
function clickHandler(event) {
    const newDiv = document.createElement('div');// Creamos un nuevo elemento div y lo asignamos a la constante 'newDiv'
    newDiv.innerHTML = 'Holiissss';// Establecemos el contenido HTML del nuevo div como 'Holiissss'
    newDiv.className = 'recuadro';// Asignamos la clase 'recuadro' al nuevo div

    contenedor.appendChild(newDiv);// Añadimos el nuevo div como hijo del contenedor
    newDiv.addEventListener('click', cambiarColor);// Agregamos un event listener para cambiar el color al hacer clic en el nuevo div
};

function cambiarColor(event) {// Función que cambia el color del elemento clickeado entre 'recuadro' y 'recuadroRojo'
    const element = event.target;// Obtenemos el elemento que disparó el evento

    // Verificamos la clase actual del elemento y cambiamos a la clase correspondiente
    if (element.className === 'recuadro') {
        element.className = 'recuadroRojo';
    } else {
        element.className = 'recuadro';
    }
};

// Agregamos un event listener para ejecutar la función 'clickHandler' al hacer clic en el botón 'agregar'
agregar.addEventListener('click', clickHandler);


