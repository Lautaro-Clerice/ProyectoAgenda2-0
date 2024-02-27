import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    ServicioSeleccionado: null,
}

const ServSlice = createSlice({
    name: "ServElegido",
    initialState: INITIAL_STATE,
    reducers: {
        setServElegido: (state, action) => {
            return {
                ...state,
                ServicioSeleccionado: action.payload
            };
        
        },
    }
})


export const {setServElegido } = ServSlice.actions;
export default ServSlice.reducer;