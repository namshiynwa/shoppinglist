import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AdditemComponent } from './shopping-list/additem/additem.component';
import { ListitemComponent } from './shopping-list/listitem/listitem.component';
import { ShopSelectorComponent } from './shop-selector/shop-selector.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsComponent,
    ItemlistComponent,
    HeaderComponent,
    ShoppingListComponent,
    AdditemComponent,
    ListitemComponent,
    ShopSelectorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
