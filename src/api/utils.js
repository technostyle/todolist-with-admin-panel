export const createFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  return formData;
};

export const getUniqueId = () => {
  let counter = 0;
  return () => `id-${counter++}`;
};
