//Private
import VendrService from "./vendrService.js"

let vs = new VendrService()
vs.passItemPosition()
vs.itemInfo()
drawButtons(0)

//Public 
function draw() {

  let b = vs.Balance
  document.getElementById('bal').innerText = b.toFixed(2)
  drawButtons(b)
}

function drawButtons(b) {
  let template = "";
  let picts = "";
  let prices = "";
  let item = vs.GetItemPosition
  let itemPrice = vs.GetItemPrice
  let itemPic = vs.GetItemPic
  for (let a = 0; a < 3; a++) {
    template += `<button type="button" id="${item[a]}" class="btn btn-lg btn-success mx-2 px-5" onclick = "app.controllers.vendrController.vendItem(${a})">${item[a]}</button>`
    picts += `<img class="mx-2" src="${itemPic[a]}" alt="">`
    prices += `<h2>$${itemPrice[a]}</h2>`
  }
  document.getElementById('itemButton').innerHTML = template;
  document.getElementById('itemPrice').innerHTML = prices;
  document.getElementById('itemPic').innerHTML = picts;

  for (let a = 0; a < 3; a++) {
    if (b < itemPrice[a]) {
      document.getElementById(`${item[a]}`).disabled = true
    } else {
      document.getElementById(`${item[a]}`).disabled = false
    }
  }
}

export default class VendrController {

  constructor() {
    draw()
  }
  vendItem(pNum) {
    vs.vendItem(pNum)
    draw()
  }
  addQuarter() {
    vs.addQuarter()
    draw()
  }
  addDollar() {
    vs.addDollar()
    draw()
  }
  itemInfo() {
    vs.itemInfo()
  }

}