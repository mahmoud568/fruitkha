import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';

// translate imports
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDropdownComponent } from './shared/component/custom-dropdown/custom-dropdown.component';
import { ScrollDirective } from './shared/directive/scroll.directive';
import { StaticHomeComponent } from './pages/home/static-home/static-home.component';
import { SliderHomeComponent } from './pages/home/slider-home/slider-home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardComponent } from './shared/component/card/card.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NewsCardComponent } from './shared/component/news-card/news-card.component';
import { MomentPipe } from './shared/pipe/MomentPipe';
import { BrandsComponent } from './pages/brands/brands.component';
import { NgbdModalConfirmComponent } from './shared/component/ngbd-modal-confirm/ngbd-modal-confirm.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';


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
    NotFoundComponent,
    CardComponent,
    FooterComponent,
    NewsCardComponent,
    MomentPipe,
    BrandsComponent,
    NgbdModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatIconModule,
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
    }),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
