import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomDropdownComponent } from './shared/component/custom-dropdown/custom-dropdown.component';
import { ScrollDirective } from './shared/directive/scroll.directive';
import { StaticHomeComponent } from './pages/home/static-home/static-home.component';
import { SliderHomeComponent } from './pages/home/slider-home/slider-home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { SingleNewsComponent } from './pages/news/single-news/single-news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleProductComponent } from './pages/shop/single-product/single-product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// translate imports
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CardComponent } from './shared/component/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './pages/footer/footer.component';
import { NewsCardComponent } from './shared/component/news-card/news-card.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomDropdownComponent,
    ScrollDirective,
    StaticHomeComponent,
    SliderHomeComponent,
    AboutComponent,
    NewsComponent,
    SingleNewsComponent,
    ContactComponent,
    ShopComponent,
    SingleProductComponent,
    CheckoutComponent,
    CartComponent,
    SearchComponent,
    NotFoundComponent,
    CardComponent,
    FooterComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // translation imports
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
