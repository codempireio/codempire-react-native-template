import { combineReducers } from 'redux';

import { IAuthRedux, reducerAuth, TAuthActions } from './auth';

export interface IReduxStore {
  auth: IAuthRedux;
}

export type TActions = TAuthActions;

export const rootReducer = combineReducers({
  auth: reducerAuth,
});
