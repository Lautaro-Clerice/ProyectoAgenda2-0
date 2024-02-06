
import axios from 'axios';
import {BASE_URL} from '../Utils/Constants'
export const createUser = async (nombre, email, password, telefono) => {
    try {
        const response = await axios.post(
            `${BASE_URL}auth/register`, {
                nombre,
                email,
                telefono,
                password
            });
        return response.data;
    } catch (error) {
        alert(error.response.data.errors[0].msg);
        console.log(error);
        throw error;  // Propagar el error
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}auth/login`, {
                email,
                password
            });
        return response.data;
    } catch (error) {
        alert(error.response.data.msg);
        console.log(error);
        throw error;  // Propagar el error
    }
}
