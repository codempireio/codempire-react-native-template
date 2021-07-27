import { AxiosPromise } from 'axios';

import {
  DELETE_ENDPOINTS, GET_ENDPOINTS, POST_ENDPOINTS, PUT_ENDPOINTS
} from './api.constants';

export type TResponse<T> = AxiosPromise<T>;

type TUrlParams<
  Endpoints extends Record<string, string | Function>,
  EndpointUrl extends keyof Endpoints
> = Record<
  'urlParams',
  Endpoints[EndpointUrl] extends (...args: infer P) => string ? P : never
>;

type TDynamicUrlParams<
  Endpoints extends Record<string, string | Function>,
  EndpointUrl extends keyof Endpoints
> = Endpoints[EndpointUrl] extends Function
  ? TUrlParams<Endpoints, EndpointUrl>
  : Partial<TUrlParams<Endpoints, EndpointUrl>>;

type TPayload<
  Endpoints extends Record<string, string | Function>,
  Payload extends Record<keyof Endpoints, Object | undefined>,
  EndpointUrl extends keyof Endpoints
> = Record<'payload', Payload[EndpointUrl]>;

type TDynamicPayload<
  Endpoints extends Record<string, string | Function>,
  Payload extends Record<keyof Endpoints, Object | undefined>,
  EndpointUrl extends keyof Endpoints
> = Payload[EndpointUrl] extends Object
  ? TPayload<Endpoints, Payload, EndpointUrl>
  : Partial<TPayload<Endpoints, Payload, EndpointUrl>>;

type TRequest<
  Endpoints extends Record<string, string | Function>,
  Payload extends Record<keyof Endpoints, Object | undefined>,
  Response extends Record<keyof Endpoints, Object>
> = <EndpointUrl extends keyof Endpoints>(
  requestData: Record<'requestUrl', EndpointUrl> &
    TDynamicPayload<Endpoints, Payload, EndpointUrl> &
    TDynamicUrlParams<Endpoints, EndpointUrl> &
    Partial<Record<'contentType', string>>
) => Promise<Response[EndpointUrl]>;

export type TFetchRequest = TRequest<
  typeof GET_ENDPOINTS,
  IGetPayload,
  IGetResponse
>;

export type TPostRequest = TRequest<
  typeof POST_ENDPOINTS,
  IPostPayload,
  IPostResponse
>;

export type TPutRequest = TRequest<
  typeof PUT_ENDPOINTS,
  IPutPayload,
  IPutResponse
>;

export type TDeleteRequest = TRequest<
  typeof DELETE_ENDPOINTS,
  IDeletePayload,
  IDeleteResponse
>;
