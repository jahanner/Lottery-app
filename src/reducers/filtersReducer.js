const filtersReducerDefaultState = {
  text: "",
  date: ""
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTERS":
      const { date, text } = action.payload;
      return {
        ...state,
        text,
        date
      };
    default:
      return state;
  }
};
