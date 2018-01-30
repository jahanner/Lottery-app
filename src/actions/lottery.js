import uuid from "uuid";

export const addLotteryApp = ({
  prizeDescription,
  drawingDate = 0,
  winnerMessage
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
