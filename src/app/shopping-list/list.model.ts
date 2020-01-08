export class list {
  public itemName: string;
  public itemCode: string;
  public itemQty: number;
  public itemUnit: string;
  public itemPrice: number;

  constructor(name: string, code: string, qty: number, unit: string, price: number){
    this.itemName = name;
    this.itemCode = code;
    this.itemQty = qty;
    this.itemUnit = unit;
    this.itemPrice = price;
  }

}
