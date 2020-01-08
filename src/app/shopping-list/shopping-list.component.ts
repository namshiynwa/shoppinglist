import { Component, OnInit } from '@angular/core';

import { list } from './list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: list[] = [new list('Milma Milk 500li', 'ml0001', 2, 'Packet', 100),
  new list('Sunflower Oli 1 li', 'sf0001', 1, 'Packet', 128),
  new list('Matta Rice', 'mt0001', 10, 'Kg', 540)];

  totalPrice = 0;

  constructor() {
    this.calculateTotal();
   }

  ngOnInit() {
  }

  addItem(name: string, qty: number) {
    this.shoppingList.push(new list(name, '154841', qty, 'Kg', 10));
    this.calculateTotal();
  }

  deleteItem(index: number, itemName: string) {
    if (confirm('Are you sure to delete ' + itemName)) {
    this.shoppingList.splice(index, 1);
    this.calculateTotal();
    }
  }

  calculateTotal() {
    this.totalPrice = this.shoppingList.filter(item => item.itemPrice >= 0)
    .reduce((sum, current) => sum + current.itemPrice, 0);
  }

}
