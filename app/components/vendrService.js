//Private
import VendrMachine from '../models/vendrMachine.js'


//Public
let vm = new VendrMachine()

export default class VendrService {

  constructor() {
  }
  get Balance() {
    console.log('balance')
    return vm.balance
  }
  get Message() {
    console.log('message')
    return vm.message
  }

  vendItem() {
    if (vm.snack.a1.price > vm.balance) {
      vm.message = "Add More Cash"
    }
  }

  getItem() {
    for (let i = 0; i < 3; i++)
      vm.snack.a1.name

    return arr
  }

  addQuarter() {
    console.log(2)
    vm.balance += .25
  }

  addDollar() {
    vm.balance += 1.00
  }
}