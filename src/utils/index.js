export const filterEmptyValues = (obj) => {
  if (!obj) return {};

  const res = {};
  Object.keys(obj)
    .filter((key) => !!obj[key])
    .forEach((key) => (res[key] = obj[key]));
  return res;
};

export const setSessionTokenToStorage = (token) => {
  return token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
};

export const getSessionStorageToken = () => {
  return localStorage.getItem("token") || null;
};
