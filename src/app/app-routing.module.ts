import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderHomeComponent } from './pages/home/slider-home/slider-home.component';
import { StaticHomeComponent } from './pages/home/static-home/static-home.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent, children:
  [
    {path: '', redirectTo: 'Static', pathMatch: 'full'},
    {path: 'Static', component: StaticHomeComponent},
    {path: 'Slider', component: SliderHomeComponent}
  ]
},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'About', component: AboutComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'Checkout', component: CheckoutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
  {path: 'Shop', component: ShopComponent},
  {path: 'Search', component: SearchComponent},
  {path: '404', component: NotFoundComponent},

  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
