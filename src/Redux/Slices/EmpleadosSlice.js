import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  empleados:null,
  loading: false,
  error: null,
};

const empleadosSlice = createSlice({
  name: 'ListadoEmpleados',
  initialState: INITIAL_STATE,
  reducers: {
    createempleadosFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchempleadosSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        empleados: [...action.payload],
      };
    },
    fetchempleadosFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchempleadosStart: state => {
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
    clearempleados: state => {
      return {
        ...state,
        empleados: null,
      };
    },
  },
});

export const {
  createempleadosFail,
  fetchempleadosSuccess,
  fetchempleadosFail,
  fetchempleadosStart,
  clearError,
  clearempleados,
} = empleadosSlice.actions;

export default empleadosSlice.reducer;