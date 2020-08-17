export const Types = {
  INC_COUNTER: "INC_COUNTER",
  DEC_COUNTER: "DEC_COUNTER",
} 

export const incCounter = () => ({
  type: Types.INC_COUNTER,
});

export const decCounter = () => ({
  type: Types.DEC_COUNTER,
});