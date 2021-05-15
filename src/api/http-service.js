import { createFormData } from "./utils";

const defaultQueryParams = {
  developer: "Gena",
};

const errorHandler = async (res) => {
  if (!res.ok) {
    throw res;
  }

  return res;
};

const parseResponse = async (res) => {
  const parsedRes = await res.json();
  if (parsedRes?.status === "ok") {
    return parsedRes.message;
  } else {
    throw parsedRes.messagee || parsedRes;
  }
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
      .then(errorHandler)
      .then(parseResponse)
      .catch((error) => {
        throw error;
      });
  };

  post = (url, params) => {
    return fetch(createQueryUrl(url, defaultQueryParams), {
      method: "POST",
      body: createFormData(params),
      mode: "cors",
    })
      .then(errorHandler)
      .then(parseResponse)
      .catch((error) => {
        throw error;
      });
  };
}

export const httpService = new HttpService();
