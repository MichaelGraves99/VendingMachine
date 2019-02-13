//Private
import VendrService from "./vendrService.js"

let vs = new VendrService()
vs.passItemPosition()
drawButtons()


function draw() {

  let b = vs.Balance


  document.getElementById('bal').innerText = b.toFixed(2)
  //document.getElementById('message').innerText = m

}

function drawButtons() {
  let template = "";
  let item = vs.GetItemPosition
  for (let a = 0; a < 3; a++) {
    template += `<button type="button" class="btn btn-lg btn-primary mx-2" onclick = "app.controllers.vendrController.vendItem(${a})">${item[a]}</button>`
    console.log(item[a])
  }
  document.getElementById('itemButton').innerHTML = template;
}

function drawPics() {
}

//let attacks = (Object.keys(ryu.attacks));
//onclick = "app.controllers.vendrController.vendItem(0)" > A1</button >
//Public ${[a]}

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