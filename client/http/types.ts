export interface PostParams<T> {
    endpoint: string;
    information?: T;
    signal?: AbortSignal;
    contentType?: string;
  }
  
  export interface PutParams<T> {
    endpoint: string;
    information: T;
    signal?: AbortSignal;
    contentType?: string;
  }
  
  export interface publicPostParams<T> {
    endpoint: string;
    data: T;
    contentType?: string;
    apiKey: string;
  }
  
  export interface DeleteParams {
    endpoint: string;
    signal?: AbortSignal;
  }
  export interface GetParams {
    endpoint: string;
    params?: Params;
    signal?: AbortSignal;
  }
  
  export interface PrivateGetParams {
    endpoint: string;
    signal?: AbortSignal;
    params?: Params;
  }
  
  export interface Params {
    [key: string]: string | string[] | number | null;
  }
  
  export enum API_VERSION {
    V1 = "api/v1",
  }