import uuid from "uuid";

export const addLotteryApp = ({
  drawingDate = undefined,
  prizeDescription = "",
  winnerMessage = "",
  userEmail = ""
} = {}) => ({
  type: "ADD_LOTTERY_APP",
  payload: {
    id: uuid(),
    prizeDescription,
    drawingDate,
    winnerMessage
  }
});

export const filtersAction = ({ text, date } = {}) => ({
  type: "FILTERS",
  payload: {
    text,
    date
  }
});
