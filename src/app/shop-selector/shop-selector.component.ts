import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Model/shop';

import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-shop-selector',
  templateUrl: './shop-selector.component.html',
  styleUrls: ['./shop-selector.component.css']
})
export class ShopSelectorComponent implements OnInit {
  shopCtrl: FormControl;
  filteredShopes: Observable<any[]>;
  shoplist: Shop[] = [{shopCode: 1 , shopName: 'Bakers & Butlers', location: 'Malaparamba'},
              {shopCode: 2 , shopName: 'Nesto Supermarket', location: 'Hilite Mall'},
              {shopCode: 3 , shopName: 'Just Bake', location: 'Ertanzipalam'}];

  constructor() {    

    this.shopCtrl = new FormControl();
    this.filteredShopes = this.shopCtrl.valueChanges
      .pipe(
        startWith(''),
        map(shop => shop ? this.filterShopes(shop) : this.shoplist.slice())
      );
  }

  filterShopes(name: string) {
    return this.shoplist.filter(shop =>
      shop.shopName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
  }

}
