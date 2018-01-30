const filtersReducerDefaultState = {
  text: "",
  sort: "date"
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
