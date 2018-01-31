import uuid from "uuid";

export const addLotteryApp = ({
  prizeDescription = "",
  winnerMessage = "",
  userEmail = ""
} = {}) => ({
  type: "ADD_LOTTERY_APP",
  payload: {
    id: uuid(),
    prizeDescription,
    winnerMessage
  }
});

export const dateAction = ({ date, text, warning } = {}) => ({
  type: "DATE",
  payload: {
    date,
    text,
    warning
  }
});
