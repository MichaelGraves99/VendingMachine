//Private
import VendrMachine from '../models/vendrMachine.js'

let vm = new VendrMachine()
let _itemPosition = []

//Public
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
  get GetItemPosition() {
    return _itemPosition
  }
  passItemPosition() {
    _itemPosition = vm.position
    console.log(vm.snacks.A1.price)
  }

  vendItem(pNum) {

    vm.balance -= vm.snacks[_itemPosition[pNum]].price
  }

  itemInfo() {

  }

  addQuarter() {
    console.log(2)
    vm.balance += .25
  }

  addDollar() {
    vm.balance += 1.00
  }

}

