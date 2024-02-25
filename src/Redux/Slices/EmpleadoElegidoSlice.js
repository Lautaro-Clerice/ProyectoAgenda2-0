import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    EmpleadoSeleccionado: null,
}

const EmpSlice = createSlice({
    name: "EmpElegido",
    initialState: INITIAL_STATE,
    reducers: {
        setEmpElegido: (state, action) => {
            return {
                ...state,
                EmpleadoSeleccionado: action.payload
            };
        
        },
    }
})


export const {setEmpElegido } = EmpSlice.actions;
export default EmpSlice.reducer;