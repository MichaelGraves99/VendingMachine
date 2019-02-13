//Private
import VendrService from "./vendrService.js"

let vs = new VendrService()


function draw() {
  console.log(4)
  let b = vs.Balance
  let m = vs.Message

  document.getElementById('bal').innerText = b.toFixed(2)
  document.getElementById('message').innerText = m
  console.log(m)
}

function drawButtons() {
  let template = "";
  let item = vs.getItem()
  for (let a = 0; a < 3; a++) {
    template += `<button type="button" class="btn btn-lg btn-danger mx-2" onclick="action(vendItem${[a + 1]})">${item[a]}</button>`
  }
  document.getElementById('attackButtons').innerHTML = template;

}

let attacks = (Object.keys(ryu.attacks));

//Public

export default class VendrController {

  constructor() {
    //8
    console.log('Building Controller')
    draw()
  }
  vendItem() {
    console.log(1)
    vs.vendItem()
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






}