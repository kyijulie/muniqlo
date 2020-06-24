export const changeColorSize = (sizes, color, size) => {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_COLOR_SIZE", sizes, color, size });
  };
};

export const getQuantity = (quantity) => {
  return (dispatch) => {
    dispatch({ type: "GET_QUANTITY", quantity });
  };
};

export const getSize = (size) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_SIZE", size });
  };
};

// export const addToBag = () => {
//   return (dispatch, getState) => {
//     dispatch({ type: "ADD_TO_BAG", })
//   }
// }
