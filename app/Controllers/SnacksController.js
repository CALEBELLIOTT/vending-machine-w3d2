import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


function _draw() {
  let template = ``
  ProxyState.snacks.forEach(s => template += s.Template)
  document.getElementById("machine-items").innerHTML = template
}

function _drawMoney() {
  document.getElementById("money").innerText = ProxyState.money.toFixed(2).toString()
  document.getElementById("money-made").innerText = ProxyState.moneyMade.toFixed(2).toString()
}


export class SnacksController {
  constructor() {
    console.log("constructor loaded");
    _draw()
    _drawMoney()
    ProxyState.on("money", _drawMoney)
    ProxyState.on("moneyMade", _drawMoney)
  }

  generateMoney() {
    snacksService.generateMoney()
  }

  purchaseProduct(product) {
    console.log(product);
    snacksService.purchaseProduct(product)
  }

}