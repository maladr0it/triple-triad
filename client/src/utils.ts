export const clamp = (lower: number, upper: number, value: number) => {
  return Math.min(Math.max(value, lower), upper);
};
