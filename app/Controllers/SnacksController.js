import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


function _draw() {
  let template = ``
  ProxyState.snacks.forEach(s => template += s.Template)
  document.getElementById("machine-items").innerHTML = template
}

function _drawMoney() {
  document.getElementById("money").innerText = ProxyState.money.toFixed(2).toString()
}


export class SnacksController {
  constructor() {
    console.log("constructor loaded");
    _draw()
    _drawMoney()
    ProxyState.on("money", _drawMoney)
  }

  generateMoney() {
    snacksService.generateMoney()
  }

}