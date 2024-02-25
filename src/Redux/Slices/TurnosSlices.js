import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URL } from "../../Utils/Constants";

const INITIAL_STATE = {
  turnos: null,
  loading: false,
  error: null 
};

export const getTurnosAsync = () => async (dispatch) => {
  dispatch(turnosSlice.actions.getTurnosStart());

  try {
    const response = await axios.get(`${BASE_URL}turnos/TLibres`);
    dispatch(turnosSlice.actions.getTurnosSuccess(response.data));
  } catch (error) {
    dispatch(turnosSlice.actions.getTurnosFailure(error));
  }
};

export const turnosSlice = createSlice({
  name: "turnos",
  initialState: INITIAL_STATE,
  reducers: {
    getTurnosStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTurnosSuccess: (state, action) => {
      state.loading = false;
      state.turnos = action.payload;
    },
    getTurnosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    eliminarTurnoSeleccionado: (state, action) => {
      const { fecha, horario } = action.payload;
      state.turnos = state.turnos.filter(
        (turno) => !(turno.fecha === fecha && turno.horario === horario)
      );
    },
  },
});

export const { eliminarTurnoSeleccionado } = turnosSlice.actions;
export default turnosSlice.reducer;
