//Private
import VendrMachine from '../models/vendrMachine.js'

let vm = new VendrMachine()
let _itemPosition = []
let _itemPic = []
let _itemPrice = []

//Public
export default class VendrService {

  constructor() {
  }
  get Balance() {
    return vm.balance
  }
  get GetItemPosition() {
    return _itemPosition
  }
  get GetItemPrice() {
    return _itemPrice
  }
  get GetItemPic() {
    return _itemPic
  }

  passItemPosition() {
    _itemPosition = vm.position
  }

  vendItem(pNum) {
    vm.balance -= vm.snacks[_itemPosition[pNum]].price
  }

  itemInfo() {
    for (let i = 0; i < 3; i++) {
      _itemPic[i] = vm.snacks[_itemPosition[i]].pict
      _itemPrice[i] = vm.snacks[_itemPosition[i]].price
    }
  }

  addQuarter() {
    vm.balance += .25
  }

  addDollar() {
    vm.balance += 1.00
  }

}

