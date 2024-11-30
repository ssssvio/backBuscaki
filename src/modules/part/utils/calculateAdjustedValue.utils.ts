export function calculateAdjustedValue(value: number, passOnFee: boolean): number {
  let tax = 0;

  if (value >= 20 && value <= 150){
    tax = 0.1;
    let adjustedValue = passOnFee
      ? value + value * tax
      : value - value * tax;
      return Number(adjustedValue.toFixed(2));
  }
  
  if (value > 150 && value <= 500){
    tax = 0.15;
    let adjustedValue = passOnFee
      ? value + value * tax
      : value - value * tax;
      return Number(adjustedValue.toFixed(2));
  }



  return value;
}