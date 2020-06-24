export const addToBag = (title, color, size, quantity, clothesId) => {
  return {
    type: "ADD_TO_ITEMS",
    title,
    color,
    size,
    quantity,
    clothesId,
  };
};
