
import axios from 'axios';
import {BASE_URL} from '../Utils/Constants'
import { toast } from 'react-toastify';
import { clearError, fetchturnosFail, fetchturnosStart, fetchturnosSuccess } from '../Redux/Slices/ObtenerTurnos';
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
        toast.warn(error.response.data.errors[0].msg)
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

export const VerifyEmail = async (email,code) => {
    try {
        const response = await axios.patch(
            `${BASE_URL}auth/verify`, {
                email,
                code
            });
        return response.data;
    } catch (error) {
        toast.warn(error.response.data.msg)
        console.log(error);
        throw error;
    }
}
export const AgendarTurno = async (usuario, turno) => {
    try {
        const response = await axios.post(
            `${BASE_URL}turnos`, turno, {
                headers: {
                    'x-token': usuario.token,
                  },
            });
        return response.data;
    } catch (error) {
        toast.warn(error.response.data.msg)
        console.log(error);
        throw error;
    }
}

const getTurnos = async (dispatch, currentUser) => {
    dispatch(fetchturnosStart());

    try {
        const turnos = await axios.get(`${BASE_URL}turnos`, {
            headers: {
                "x-token": currentUser.token,
            },
        });
        if (turnos) {
            dispatch(fetchturnosSuccess(turnos.data.data));
        }
    } catch (error) {
        console.error("Error al obtener turnos:", error);
        dispatch(fetchturnosFail("Error al obtener órdenes"));
    }
};



export default getTurnos