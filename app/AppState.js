import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  snacks = [new Snack("Snickers", 2, "./assets/img/Snickers.png"), new Snack("Gum", 1.50, "./assets/img/Gum.png"), new Snack("M&M ", 1.25, "./assets/img/m&ms.png"), new Snack("Lays Chips", 1.25, "./assets/img/lays.jpeg"), new Snack("Oreos", 2, "./assets/img/Oreo.png"), new Snack("Diet Coke", 1, "./assets/img/coke.jpeg")]

  money = 0
  moneyMade = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
