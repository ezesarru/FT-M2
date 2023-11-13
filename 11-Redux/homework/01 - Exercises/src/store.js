const { createStore } = require("redux")
const contador = require("./reducer/reducer")
const { incremento, decremento } = require("./actions/actions")

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador)

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor')

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
const renderContador = () => {
  contador = store.contador
  // Obtenemos la propiedad 'contador' de nuestro store:
  valor.innerHTML = contador
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}


// Ejecutamos la función 'renderContador':

store.subscribe(renderContador)
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
