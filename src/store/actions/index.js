export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";

export const incCounter = () => ({
  type: INC_COUNTER,
});

export const decCounter = () => ({
  type: DEC_COUNTER,
});