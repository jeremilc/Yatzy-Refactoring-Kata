import { Dices } from './Dices';

export class YatzyCategory {
  static validate(dices: Dices): number {
    if (dices.isSameValue()) return 50;
    return 0;
  }
}
