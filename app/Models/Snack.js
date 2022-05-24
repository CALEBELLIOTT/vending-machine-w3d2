


export class Snack {
  constructor(name, price, img) {
    this.name = name
    this.price = price
    this.img = img
  }


  get Template() {
    let template = `
    <div onclick='app.snacksController.purchaseProduct("${this.name}")' class="col-6">
    <div class="product-card">
      <img src="${this.img}" alt="">
      <h3>${this.name}</h3>
      <p>Price : ${this.price.toFixed(2)}</p>
    </div>
  </div>
    `
    return template
  }


}