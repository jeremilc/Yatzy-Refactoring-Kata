import { Dices } from './Dices';

export class ChanceCategory {
  static validate(dices: Dices): number {
    return dices.sum()
  }
}
