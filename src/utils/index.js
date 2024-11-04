export const isExist = (items, item) => {
  return items.find((i) => i.product_id === item.product_id);
};
