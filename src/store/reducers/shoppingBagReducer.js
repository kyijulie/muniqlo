const initState = {
  items: [],
};

const shoppingBagReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_ITEMS":
      return {
        items: [
          ...state.items,
          {
            title: action.title,
            color: action.color,
            size: action.size,
            quantity: action.quantity,
            clothesId: action.clothesId,
          },
        ],
      };
    default:
      return state;
  }
};

export default shoppingBagReducer;
