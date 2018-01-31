const lotteryReducerDefaultState = {};

export default (state = lotteryReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_LOTTERY_APP":
      const { prizeDescription, winnerMessage } = action.payload;
      return { ...state, prizeDescription, winnerMessage };
    default:
      return state;
  }
};
