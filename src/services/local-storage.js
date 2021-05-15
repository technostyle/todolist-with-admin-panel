export const setSessionTokenToStorage = (token) => {
  return token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
};

export const getSessionStorageToken = () => {
  return localStorage.getItem("token") || null;
};
