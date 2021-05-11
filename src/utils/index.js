export const filterEmptyValues = (obj) => {
  if (!obj) return {};

  const res = {};
  Object.keys(obj)
    .filter((key) => !!obj[key])
    .forEach((key) => (res[key] = obj[key]));
  return res;
};
