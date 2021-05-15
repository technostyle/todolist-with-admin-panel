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
// export const equals = (param) => (to) => to === param;

// TODO: make common?
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
