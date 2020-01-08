import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Model/shop';

@Component({
  selector: 'app-shop-selector',
  templateUrl: './shop-selector.component.html',
  styleUrls: ['./shop-selector.component.css']
})
export class ShopSelectorComponent implements OnInit {
  shoplist: Shop[];

  constructor() {
    this.shoplist = [{shopCode: 1 , shopName: 'Bakers & Butlers', location: 'Malaparamba'},
              {shopCode: 2 , shopName: 'Nesto Supermarket', location: 'Hilite Mall'},
              {shopCode: 3 , shopName: 'Just Bake', location: 'Ertanzipalam'}];
  }

  ngOnInit() {
  }

}
