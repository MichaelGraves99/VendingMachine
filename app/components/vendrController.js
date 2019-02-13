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
    template += `<button type="button" id="${item[a]}" class="btn btn-lg btn-success mx-2" onclick = "app.controllers.vendrController.vendItem(${a})">${item[a]}</button>`
    picts += `<img class="mx-2" src="${itemPic[a]}" alt="">`
    prices += `<h2>$${itemPrice[a]}</h2>`
    console.log(item[a])
    console.log(itemPrice[a])
    console.log(itemPic[a])
  }
  document.getElementById('itemButton').innerHTML = template;
  document.getElementById('itemPrice').innerHTML = prices;
  document.getElementById('itemPic').innerHTML = picts;

  // for (let a = 0; a < 3; a++) {
  //   console.log(b)
  //   console.log(72)
  //   if (b < itemPrice[a]) {
  //     document.getElementById("button").disabled = true
  //   } else {
  //     document.getElementById("button").disabled = false
  //   }
  // }
}

export default class VendrController {

  constructor() {
    //8
    console.log('Building Controller')
    draw()
  }
  vendItem(pNum) {
    vs.vendItem(pNum)
    draw()
  }
  addQuarter() {
    console.log(2)
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