
import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    turnoConfirmado: null,
}

const turnoConfirmadoSlice = createSlice({
    name: "turnoConfirmado",
    initialState: INITIAL_STATE,
    reducers: {
        setConfirmado: (state, action) => {
            return {
                ...state,
                turnoConfirmado: action.payload
            };
        },
        eliminarTurno: (state, action) => {
            return {
              ...state,
                turnoConfirmado: null
            };
        }
    }
})

export const {setConfirmado, eliminarTurno} = turnoConfirmadoSlice.actions;
export default turnoConfirmadoSlice.reducer;
