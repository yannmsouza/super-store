import { Component, OnInit, HostListener } from '@angular/core';
import { MenuService } from '../../providers/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  modal: boolean = false;

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(document.body.scrollHeight > 60){
      document.getElementById('nav-barra').style.position = 'fixed';
      document.getElementById('nav-barra').style.marginTop = '-20px';
      
      document.getElementById('nav-barra').style.width = '100%'; 
      document.getElementById("menu-side").style.marginTop = '20px';
      document.getElementById('banner-hero').style.marginTop = '30px';
    }
  }


  hideSearch() {
    this.modal = false;
  }

  showSearch() {
    this.modal = true;
  }

}
