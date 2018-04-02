import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RoutingModule } from './app.routes';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuService } from './providers/menu.service';
import { ProductsService } from './providers/products.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CartbarComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    ProductCardComponent,
    SearchbarComponent,
    Error404PageComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    MenuService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
