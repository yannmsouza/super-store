import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ProductsService } from '../../providers/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  public keyword: string = "";
  public submitted: boolean = false;
  public items: any[] = [];
  public buscas: number;
  public message: string = "Digite e Pressione Enter";

  constructor(public header: HeaderComponent, public products: ProductsService, public router: Router) { }

  ngOnInit() {
  }


  submit(e) {
    e.preventDefault();
    if (this.keyword) {
      this.submitted = true;
      this.products.search(this.keyword).then((items: any[]) => {
        this.items = items;
        if (items.length) {
          this.submitted = false;
          this.message = "";
        }
        if (!items.length && this.submitted == true) {
          this.submitted = false;
          this.message = "Nada Encontrado";
        }
      })
    }
  }

  closeSearch() {
    this.submitted = false;
    this.keyword = "";
    this.items = [];
    this.buscas = 0;
    this.message = "Digite e Pressione Enter";
  }

  public showProducts() {
    if (!this.keyword) {
      this.items = [];
      this.message = "Digite e Pressione Enter";
    } else {
      this.products.search(this.keyword).then((items: any[]) => {
        setTimeout(() => {
          this.items = items;
        }, 1 * 100);
        this.message = "";
      })
    }
  }

  goTo(item) {
    this.header.hideSearch();
    this.router.navigate([item.router]);
    this.products.scrollTop();
  }

}
