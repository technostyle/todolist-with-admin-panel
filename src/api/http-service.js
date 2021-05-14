import { createFormData } from "./utils";

const errorHandler = (res) => {
  if (!res.ok) {
    throw res;
  }

  return res;
};

const createQueryUrl = (url, params) => {
  if (Object.keys(params).length === 0) {
    return url;
  }

  const paramsQuery = Object.keys(params)
    .map((key) => {
      const value = Array.isArray(params[key])
        ? params[key].join(",")
        : params[key];
      return `${key}=${value}`;
    })
    .join("&");

  return `${url}?${paramsQuery}`;
};

class HttpService {
  get = async (url, params) => {
    const properUrl = params ? createQueryUrl(url, params) : url;
    return await fetch(properUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(errorHandler);
  };

  post = (url, params) => {
    return fetch(createQueryUrl(url, { developer: "Danila" }), {
      method: "POST",
      body: createFormData(params),
    })
      .then((res) => res.json())
      .catch(errorHandler);
  };
}

export const httpService = new HttpService();
