import uuid from "uuid";

//SET DATE and WINNER note
//

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

export const description = ({ prizeDescription, winnerMessage } = {}) => ({
  type: "PRIZE_DESCRIPTION",
  prizeDescription,
  winnerMessage
});

export const user = ({ email }) => ({
  type: "USER",
  email
});

export const drawDate = ({ date }) => ({
  type: "DRAWING_DATE",
  date
});
