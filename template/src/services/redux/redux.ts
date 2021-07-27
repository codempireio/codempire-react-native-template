import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { IReduxStore, rootReducer, TActions } from './redux.reducers';

import { APP_NAME } from '@constants/config';

// PERSIST config for redux lib. Store data in async storage
const PERSIST_CONFIG = {
  key: APP_NAME,
  storage: AsyncStorage,
};
const reducer = persistReducer(PERSIST_CONFIG, rootReducer);

// THUNK middleware for async actions
const middleware = [thunk as ThunkMiddleware<IReduxStore, TActions>];

// REACT_DEVTOOLS for debugging
const addMiddleware = composeWithDevTools(applyMiddleware(...middleware));

// STORE itself
export const REDUX_STORE = createStore(reducer, addMiddleware);

export const PERSISTOR = persistStore(REDUX_STORE);
