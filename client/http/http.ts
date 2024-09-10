import { axiosInstance } from "@/lib/axios/axios";

import { DeleteParams, GetParams, PostParams, PutParams } from "./types";

export default class Repository {
  async post<T>(postParams: PostParams<T>): Promise<any> {
    const { endpoint, information, signal, contentType } = postParams;

    const configuration = {
      signal,
      headers: {
        "content-type": contentType ?? "application/json",
      },
    };

    try {
      const response = await axiosInstance.post(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch<T>(putParams: PutParams<T>): Promise<any> {
    const { endpoint, information, signal } = putParams;

    const configuration = {
      signal,
    };

    try {
      const response = await axiosInstance.patch(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async put<T>(putParams: PutParams<T>): Promise<any> {
    const { endpoint, information, signal } = putParams;

    const configuration = {
      signal,
    };

    try {
      const response = await axiosInstance.put(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get(getParams: GetParams) {
    const { endpoint, signal, params } = getParams;

    const configuration = {
      params,
      signal,
    };

    try {
      const response = await axiosInstance.get(endpoint, configuration);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(deleteParams: DeleteParams) {
    const { endpoint, signal } = deleteParams;

    const configuration = {
      signal,
    };
    try {
      const response = await axiosInstance.delete(endpoint, configuration);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}