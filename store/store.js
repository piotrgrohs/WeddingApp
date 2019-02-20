import { createStore } from "redux";
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "../reducers/index";


//{AsyncStorage.clear()}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
const initialState = {}; 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    initialState,

   );   

export const persistor = persistStore(store);