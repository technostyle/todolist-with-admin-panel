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

export const prop = (key, defaultValue) => (obj) =>
  (obj && obj?.[key]) || defaultValue;
export const equals = (to) => (something) => something === to;
export const equal = (a, b) => a === b;

export const memoize = (foo) => {
  let prevParams = [];
  let prevResult = null;

  return (...curParams) => {
    if (curParams.every((param, idx) => param === prevParams[idx])) {
      return prevResult;
    }

    prevParams = curParams;
    prevResult = foo(...curParams);
    return prevResult;
  };
};

export const getUniqueId = (() => {
  let counter = 0;
  return () => counter++;
})();

export const getObjValues = (obj) =>
  typeof obj === "object" ? Object.keys(obj).map((key) => obj[key]) : [];
