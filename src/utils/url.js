import { getObjValues } from "./obj";

export const createFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  return formData;
};

export const formatErrorMessageObj = (obj) => getObjValues(obj).join(", ");
