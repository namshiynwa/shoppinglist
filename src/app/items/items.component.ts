import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ['Pencil', 'cake'];
  itemName = '';

  constructor() { }

  ngOnInit() {
  }

  addItem()  {
    this.itemName !== '' ? this.items.push(this.itemName) : alert('please enter an item!');
  }

}
