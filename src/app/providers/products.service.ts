import { Injectable } from '@angular/core';


declare var require: any;


const products = require('./products.json');
let BASEURL = window.location.href;
BASEURL = BASEURL.substring(0, BASEURL.length - 1);

import * as _ from 'lodash';
import * as $ from 'jquery';
import { reject, resolve } from 'q';

@Injectable()
export class ProductsService {

  constructor() { }

  public productList: any[] = products;
  
  list() {
    return new Promise((resolve, reject) => {
      products.map((product, i) => {
        //titulo no-formato-de-slug
        products[i].titleSlug = _.kebabCase(product.name);

        //a rota deste post

        products[i].router = '/products/' + products[i].titleSlug + '/' + products[i].id;

        products[i].url = BASEURL + products[i].router;

      });
      resolve(products);
    })
  }

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let product = _.find(products, (p) => {
          return p.id == id;
        });
        return product ? resolve(product) : reject('product not found');
      });
    })
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, (p) => {
            return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      });
    })
  }


  searchRoute(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, (p) => {
            return p.router.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      });
    })
  }

  scrollTop(){
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }
  
}
