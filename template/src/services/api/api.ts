import axios from 'axios';

import { useReduxSelector } from '@services/redux';

import { API_URL } from '@constants/config';
import {
  AUTHORIZATION_PREFIX, DELETE_ENDPOINTS, GET_ENDPOINTS, POST_ENDPOINTS,
  PUT_ENDPOINTS
} from './api.constants';

import {
  TDeleteRequest, TFetchRequest, TPostRequest, TPutRequest
} from './api.typings';

const getInstance = () => {
  const instance = axios.create({
    baseURL: `${API_URL}`,
    timeout: 10000,
  });

  instance.interceptors.request.use(async (config) => {
    const { token } = useReduxSelector(({ auth }) => auth);
    return {
      ...config,
      headers: {
        Authorization: `${AUTHORIZATION_PREFIX}${token}`,
      },
    };
  });

  return instance;
};

export const postData: TPostRequest = async ({
  requestUrl,
  urlParams,
  payload,
  contentType,
}) => {
  const urlRequest = POST_ENDPOINTS[requestUrl];
  const url =
    typeof urlRequest === 'string'
      ? urlRequest
      : (urlRequest as Function)(...(urlParams as Array<typeof urlParams>));

  const { data } = await getInstance().post(`${API_URL}${url}`, payload, {
    headers: { 'Content-Type': contentType },
  });
  return data;
};

export const fetchData: TFetchRequest = async ({
  requestUrl,
  urlParams,
  payload,
}) => {
  const urlRequest = GET_ENDPOINTS[requestUrl];
  const url =
    typeof urlRequest === 'string'
      ? urlRequest
      : (urlRequest as Function)(...(urlParams as Array<typeof urlParams>));

  const { data } = await getInstance().get(`${API_URL}${url}`, {
    params: payload,
  });
  return data;
};

export const changeData: TPutRequest = async ({
  requestUrl,
  urlParams,
  payload,
  contentType,
}) => {
  const urlRequest = PUT_ENDPOINTS[requestUrl];
  const url =
    typeof urlRequest === 'string'
      ? urlRequest
      : (urlRequest as Function)(...(urlParams as Array<typeof urlParams>));

  const { data } = await getInstance().put(`${API_URL}${url}`, payload, {
    headers: { 'Content-Type': contentType },
  });
  return data;
};

export const deleteData: TDeleteRequest = async ({
  requestUrl,
  urlParams,
  payload,
}) => {
  const urlRequest = DELETE_ENDPOINTS[requestUrl];
  const url =
    typeof urlRequest === 'string'
      ? urlRequest
      : (urlRequest as Function)(...(urlParams as Array<typeof urlParams>));

  const { data } = await getInstance().delete(`${API_URL}${url}`, {
    data: payload,
  });
  return data;
};
