import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  servicios:null,
  loading: false,
  error: null,
};

const serviciosSlice = createSlice({
  name: 'Listadoservicios',
  initialState: INITIAL_STATE,
  reducers: {
    createserviciosFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchserviciosSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        servicios: [...action.payload],
      };
    },
    fetchserviciosFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchserviciosStart: state => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: state => {
      return {
        ...state,
        error: null,
      };
    },
    clearservicios: state => {
      return {
        ...state,
        servicios: null,
      };
    },
  },
});

export const {
  createserviciosFail,
  fetchserviciosSuccess,
  fetchserviciosFail,
  fetchserviciosStart,
  clearError,
  clearservicios,
} = serviciosSlice.actions;

export default serviciosSlice.reducer;