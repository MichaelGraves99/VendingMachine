

import Snack from "./snack.js";





export default class VendrMachine {
  constructor() {
    this.snack = {
      a1: new Snack('Snickers', 1),
      a2: new Snack('Twix', 0.75),
      a3: new Snack('Ruffles', 1.5)
    }
    this.balance = 0
    this.message = 'Press Button For Item'
  }
}



