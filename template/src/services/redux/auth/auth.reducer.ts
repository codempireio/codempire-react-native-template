import { TAuthActions } from './auth.actions';

import { AUTH_ACTIONS, IAuthRedux, INIT_AUTH_REDUCER } from './auth.constants';

const { LOGIN, LOGOUT } = AUTH_ACTIONS;

export const reducerAuth = (
  state = INIT_AUTH_REDUCER,
  action: TAuthActions
): IAuthRedux => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload.token };

    case LOGOUT:
      return { ...state, token: '' };

    default:
      return state ?? INIT_AUTH_REDUCER;
  }
};
