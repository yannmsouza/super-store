import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products.service';
import { MenuService } from '../../providers/menu.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ProductCardComponent } from '../../components/product-card/product-card.component';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  public hiddenBanner: boolean = true;
  public items: any[] = [];
  public item: any = null;
  constructor(public products: ProductsService, public router: Router, public menu: MenuService) { }


  ngOnInit() {
    this.showProduct();
  }


  showProduct() {

    let url: string = document.URL;
    let urlList: string[];
    let idProduct: string;

    urlList = url.split('/');

    idProduct = urlList[urlList.length - 1];


    for (let p of this.products.productList) {
      if (p.id == idProduct) {
        this.items[0] = p;
      }
    }


  }



}
