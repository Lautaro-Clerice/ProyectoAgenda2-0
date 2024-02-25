import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import turnosReducer from './Slices/TurnosSlices'
import userReducer from './Slices/TurnosObtenidosSlice'
import turnoConfirmadoReducer from './Slices/TurnoConfirmado'
import turnoClienteReducer from './Slices/ObtenerTurnos'
import empleadosReducer from './Slices/EmpleadosSlice'
import seleccionadoReducer from './Slices/EmpleadoElegidoSlice'
const reducers = combineReducers({
    turnos: turnosReducer,
    user: userReducer,
    turnoConfirmado: turnoConfirmadoReducer,
    turnoCliente: turnoClienteReducer,
    listaEmpleados: empleadosReducer,
    empleadoSeleccionado: seleccionadoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  })
});

const persistor = persistStore(store);

export { store, persistor };
