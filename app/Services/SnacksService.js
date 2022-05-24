import { ProxyState } from "../AppState.js"



class SnacksService {
  generateMoney() {
    ProxyState.money += .50
  }
  constructor() {

  }



}

export const snacksService = new SnacksService()