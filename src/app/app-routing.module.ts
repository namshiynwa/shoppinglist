import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [{path: 'shoppinglist', component: ShoppingListComponent},
{path: 'home', component: HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: '**', component: HomeComponent},
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
