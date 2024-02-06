import { createSlice } from "@reduxjs/toolkit";
import { turnos } from "../../Turnos/turnosLibres";

const INITIAL_STATE = {
  turnos: turnos.turnos,
};


export const turnosSlice = createSlice({
  name: "turnos",
  initialState: INITIAL_STATE,
  reducers: {
    getTurnos: (state) => {
      return state;
    },
    eliminarTurnoSeleccionado: (state, action) => {
      const { fecha, horario } = action.payload;
      state.turnos = state.turnos.filter(
        (turno) => !(turno.fecha === fecha && turno.horario === horario)
      );
    },
  },
});

export const { getTurnos, eliminarTurnoSeleccionado } = turnosSlice.actions;
export default turnosSlice.reducer;
