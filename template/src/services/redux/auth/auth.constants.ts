export const AUTH_ACTIONS = <const>{
  LOGIN: '@AUTH_ACTIONS/LOGIN',
  LOGOUT: '@AUTH_ACTIONS/LOGOUT',
};

export interface IAuthRedux {
  token: string;
}

export interface ILoginActionPayload {
  token: string;
}

export const INIT_AUTH_REDUCER: IAuthRedux = {
  token: '',
};
