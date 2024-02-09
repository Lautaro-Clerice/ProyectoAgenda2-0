import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  turnos: null,
  loading: false,
  error: null,
};

const turnosSlice = createSlice({
  name: 'turnos',
  initialState: INITIAL_STATE,
  reducers: {
    createturnoFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchturnosSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        turnos: [...action.payload],
      };
    },
    fetchturnosFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchturnosStart: state => {
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
    clearturnos: state => {
      return {
        ...state,
        turnos: null,
      };
    },
  },
});

export const {
  createturnoFail,
  fetchturnosSuccess,
  fetchturnosFail,
  fetchturnosStart,
  clearError,
  clearturnos,
} = turnosSlice.actions;

export default turnosSlice.reducer;