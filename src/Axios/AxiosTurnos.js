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
