const initState = {
  sizes: {},
  color: "",
  quantity: "1",
  size: "",
  bagError: "",
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_SIZE":
      return {
        ...state,
        sizes: action.sizes,
        color: action.color,
        size: action.size,
      };
    case "GET_SIZE":
      return {
        ...state,
        size: action.size,
      };
    case "GET_QUANTITY":
      return {
        ...state,
        quantity: action.quantity,
      };
    default:
      return state;
  }
};

export default productReducer;
