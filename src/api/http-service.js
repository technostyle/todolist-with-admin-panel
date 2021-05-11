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

  let queryUrl = `${url}?`;
  Object.keys(params).forEach((key) => {
    const value = Array.isArray(params[key])
      ? params[key].join(",")
      : params[key];
    queryUrl += `${key}=${value}`;
  });

  return queryUrl;
};

class HttpService {
  get = (url, params) => {
    const properUrl = params ? createQueryUrl(url, params) : url;
    return fetch(properUrl)
      .then((res) => res.json())
      .catch(errorHandler);
  };
}

export const httpService = new HttpService();
