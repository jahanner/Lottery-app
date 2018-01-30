import uuid from "uuid";

const lotteryReducerDefaultState = {
  drawingDate: 0,
  prizeDescription: "",
  winnerMessage: "",
  userEmail: "",
  lotteryID: uuid()
};

export default (state = lotteryReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_LOTTERY_APP":
      const {
        prizeDescription,
        winnerMessage,
        lotteryInfo,
        drawingDate
      } = action.payload;
      return { ...state, prizeDescription, winnerMessage, drawingDate };
    default:
      return state;
  }
};
