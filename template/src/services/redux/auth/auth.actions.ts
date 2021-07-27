import { action } from '../redux.utils';

import { AUTH_ACTIONS, ILoginActionPayload } from './auth.constants';

import { TActionCombiner } from '../redux.typings';

const { LOGIN, LOGOUT } = AUTH_ACTIONS;

export const AuthActions = {
  login: (payload: ILoginActionPayload) => action(LOGIN, payload),
  logout: () => action(LOGOUT),
};

export type TAuthActions = ReturnType<TActionCombiner<typeof AuthActions>>;
