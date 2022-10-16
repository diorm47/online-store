export const calcTotalPrice = (items) =>
  items.reduce((acc, item) => (acc += item.price), 0);
