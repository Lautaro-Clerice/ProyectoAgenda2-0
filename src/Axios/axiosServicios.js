import axios from "axios";
import { BASE_URL } from "../Utils/Constants";
import {fetchserviciosStart, fetchserviciosSuccess,fetchserviciosFail } from '../Redux/Slices/ServiciosSlice'

export const getServicios = async (dispatch) => {
    fetchserviciosStart()
    try {
        const servicios = await axios.get(`${BASE_URL}servicios`)
        console.log(servicios);
        if(servicios){
            dispatch(fetchserviciosSuccess(servicios.data.data))
        }
    } catch (error) {
        console.log(error);
        fetchserviciosFail('Algo salio mal')
    }
}