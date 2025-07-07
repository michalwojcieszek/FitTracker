export const calculateBMI = (weight: number, height: number) =>
  +(weight / (height * height)).toFixed(1);
