const isNil = (value) => {
  return value === null || value === undefined || typeof value === "undefined";
};

export const filterEmptyValues = (obj) => {
  if (!obj) return {};

  const res = {};
  Object.keys(obj)
    // .filter((key) => !(obj[key] === null) && typeof obj[key] !== 'undefined')
    .filter((key) => !isNil(obj[key]))
    .forEach((key) => (res[key] = obj[key]));
  return res;
};

// TODO: support array or dotted string?
export const prop = (key) => (obj) => (obj && obj?.[key]) || undefined;
