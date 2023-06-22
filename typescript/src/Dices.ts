export class Dices {
  dicesValues: number[];

  constructor(diceValueValue1: number, diceValueValue2: number, diceValueValue3: number, diceValueValue4: number, diceValueValue5: number) {
    this.dicesValues = [diceValueValue1, diceValueValue2, diceValueValue3, diceValueValue4, diceValueValue5]
  }
  
  sum() {
    return this.dicesValues.reduce((total, diceValue) => total += diceValue, 0);
  }

  isSameValue() {
    return Math.min(...this.dicesValues) === Math.max(...this.dicesValues);
  }
}