const lotteryReducerDefaultState = {
  date: 0,
  prizeDescription: "",
  winnerMessage: "",
  userEmail: "",
  lotteryID: 0
};

export default (state = lotteryReducerDefaultState, action) => {
  switch (action.type) {
    case "DRAWING_DATE":
      return [...state, action.date];
    case "PRIZE_DESCRIPTION":
      return [...state, action.prizeDescription, action.winnerMessage];
    default:
      return state;
  }
};

// const demoState = {
//   lottery: [
//     {
//       id: "alksjdlak",
//       prizeDescription: "alsdjalksd",
//       drawDate: 0,
//       email: "lke@alks.com"
//     }
//   ]
// };
