import instance from "./instance";

export const get = () => {
  const url = "products";
  return instance.get(url);
};


export const create = (data: any) => {
  const url = "products";
  return instance.post(url, data);
};
