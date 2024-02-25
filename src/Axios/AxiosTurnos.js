import axios from "axios";
import { BASE_URL } from "../Utils/Constants";

const deleteTurnos = async (dispatch, currentUser, _id) => {
  console.log("ID del turno a eliminar:", _id);
  console.log("token", currentUser);
  try {
      const response = await axios.delete(`${BASE_URL}turnos/${_id}`, {
          headers: {
              "x-token": currentUser,
          },
      });
      console.log("Respuesta del servidor:", response.data);
      
  } catch (error) {
      console.error("Error al eliminar el turno:", error);
  }
};



export const updateTurnos = async (dispatch, currentUser, _id) => {
  console.log("ID del turno a eliminar:", _id);
  try {
      const response = await axios.delete(`${BASE_URL}turnos/${_id}`,currentUser.fecha, currentUser.horario);
      console.log("Respuesta del servidor:", response.data);
      
  } catch (error) {
      console.error("Error al eliminar el turno:", error);
  }
};

export default deleteTurnos;

export const getTurnosLibres = async(dispatch) => {
    try {
        const turnosLibres = await axios.get(`${BASE_URL}turnos/TLibres`)
        console.log(turnosLibres);
    } catch (error) {
        console.log(error);
        
    }
}


export const ocuparTurnoLibre = (id) => {

    try {
        const cambio = axios.patch(`${BASE_URL}turnos/${id}`);
        console.log("Respuesta del servidor:", cambio.data);
    } catch (error) {
        console.log(error);
    }
}


export const liberarTurno = async (datosturno) => {
    try {
        const cambio = await axios.put(`${BASE_URL}turnos/liberar`, datosturno);
        console.log("Respuesta del servidor:", cambio.data);
    } catch (error) {
        console.log(error);
    }
}
