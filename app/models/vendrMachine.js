

import Snack from "./snack.js";





export default class VendrMachine {
  constructor() {
    this.snacks = {
      A1: new Snack('Snickers', 1.00, '../../assets/snickers.jpg'),
      A2: new Snack('Twix', 0.75, 'assets/twix.jpg'),
      A3: new Snack('Ruffles', 1.50, 'assets/ruffles.jpg')
    }
    this.balance = 0
    this.position = ['A1', 'A2', 'A3']
  }
}



