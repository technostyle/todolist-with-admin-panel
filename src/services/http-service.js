import { createFormData } from "utils";

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
    throw parsedRes.message || parsedRes;
  }
};

const createQueryUrl = (url, params) => {
  if (!params || Object.keys(params).length === 0) {
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

export class HttpService {
  httpGet = async (url, params) => {
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

  httpPost = ({ url, params, queryParams }) => {
    return fetch(createQueryUrl(url, queryParams), {
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
