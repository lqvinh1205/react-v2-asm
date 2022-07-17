import instance from "./instance";

export const get = () => {
  const url = "products";
  return instance.get(url);
};
