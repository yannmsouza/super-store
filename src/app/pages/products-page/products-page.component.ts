import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../providers/menu.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.sass']
})
export class ProductsPageComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

}
