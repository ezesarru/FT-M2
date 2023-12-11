// Acá importa las action-types que necesitas para trabajar las actions-creators
import { GET_ALL_ACTORS, GET_ACTOR_DETAIL, CREATE_ACTOR, DELETE_ACTOR} from './action-types'
import axios from "axios";

/* 3️⃣ ***ACTIONS*** 3️⃣ */
// 📢 Recuerda RETORNAR las peticiones que hagan tus action-creators 📢 
// Ej: return fetch(...) o return axios(...)

// 🟢 getAllActors:
// Esta función debe realizar una petición al Back-End. 
// Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/actors'.
export const getAllActors = () => {
    return async (dispatch) => {
        const { data } = await axios('http://localhost:3001/actors')
        dispatch({
            type: GET_ALL_ACTORS,
            payload: data
        })
    }
}

// 🟢 getActorDetail:
// Esta función debe hacer una petición al Back-End. 
// Ten en cuenta que tiene que recibir la variable "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/actors/:id'.
export const getActorDetail = (id) => {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3001/actors/${id}`)
        dispatch({
            type: GET_ACTOR_DETAIL,
            payload: data
        })
    }
}

// 🟢 createActor:
// Esta función debe recibir una variable "newActor" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable newActor, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites.
let id = 6
export const createActor = (newActor) => {
    return {
        type: CREATE_ACTOR,
        payload: {
            ...newActor,
            id: id ++
        }
    }
};

// 🟢 deleteActor:
// Esta función debe retornar una action. En su propiedad "payload" guardarás el ID recibido por parámetro.
export const deleteActor = (id) => {
    return {
        type: DELETE_ACTOR,
        payload: id
    }
}
