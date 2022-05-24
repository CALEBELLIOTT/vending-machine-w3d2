import { ProxyState } from "../AppState.js"



class SnacksService {
  purchaseProduct(product) {
    let currentProduct = ProxyState.snacks.find(s => s.name == product)
    if (ProxyState.money > currentProduct.price) {
      ProxyState.money -= currentProduct.price
      ProxyState.moneyMade += currentProduct.price
    }
  }
  generateMoney() {
    ProxyState.money += .50
  }
  constructor() {

  }
}

export const snacksService = new SnacksService()