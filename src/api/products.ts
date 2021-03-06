import instance from "./instance";

export const get = () => {
  const url = "products";
  return instance.get(url);
};

export const create = (data: any) => {
  const url = "products";
  return instance.post(url, data);
};
export const read = (id: any) => {
  const url = `products/${id}`;
  return instance.get(url);
};
export const update = (data: any) => {
  const url = `products/${data.id}`;
  return instance.patch(url, data);
};

export const changeStatus = (product: any) => {
  const url = `products/${product.id}`;
  return instance.patch(url, {status: !product.status});
};
