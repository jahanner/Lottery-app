const filtersReducerDefaultState = {
  date: "",
  text: "",
  warning: "",
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "DATE":
      const { date, text, warning } = action.payload;
      return {
        ...state,
        date,
        text,
        warning
      };
    default:
      return state;
  }
};
