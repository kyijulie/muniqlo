export const changeColorSize = (sizes, color) => {
  console.log("action", color);
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CHANGE_COLOR_SIZE", sizes, color });
  };
};
