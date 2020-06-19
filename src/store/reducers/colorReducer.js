const initState = {
  sizes: {},
  color: "",
};

const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_SIZE":
      return {
        ...state,
        sizes: action.sizes,
        color: action.color,
      };
    default:
      return state;
  }
};

export default colorReducer;
