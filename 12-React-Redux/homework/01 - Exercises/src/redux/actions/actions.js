import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from './types'
import axios from 'axios'

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

const getStoreName = () => {
    (dispatch) => {
        axios.get('http://localhost:3001/store')
            .then((response) => {
                return dispatch()
            }
    }
}

export default { addProduct, deleteProduct, getStoreName }