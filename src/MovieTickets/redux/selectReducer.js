const initialState = {
  selected: [],
};

const reducer = function (currnentState = initialState, action) {
  switch (action.type) {
    case "ADD_SEAT":
      let cloneSelectSeat = [...currnentState.selected];

      let index = cloneSelectSeat.findIndex((item) => {
        return item.soGhe === action.payload.soGhe;
      });

      if (index !== -1) {
        cloneSelectSeat.splice(index, 1);
      } else {
        cloneSelectSeat.push(action.payload);
      }

      return { ...currnentState, selected: cloneSelectSeat };
    default:
      return { ...currnentState };
  }
};

export default reducer;
