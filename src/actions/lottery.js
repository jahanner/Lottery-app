import uuid from "uuid";

export const addLotteryApp = ({
  prizeDescription = "",
  createdAt = 0,
  drawingTime = 0
} = {}) => ({
  type: "ADD_LOTTERY_APP",
  lotteryInfo: {
    id: uuid(),
    prizeDescription,
    createdAt,
    drawingTime
  }
});
