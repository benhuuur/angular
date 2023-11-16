import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/Product';
import { ShopListService } from '../service/shop-list.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  show = true;
  numberNew = 0;
  nameNew = '';
  list: Product[] = [];
  // private service : ShopListService = new ShopListService();
  constructor(private service: ShopListService) {}

  ngOnInit(): void {
    this.service.initItems();
    this.list = this.service.getItems();
  }
  purchase(event: any, name: string) {
    this.list.forEach((element) => {
      if (element.name === name) element.purchased = event.target.checked;
    });
  }
  hidePurchased(event: any) {
    this.show = !event.target.checked;
  }
  delete(name: string) {
    var count = 0;
    var tlist;
    tlist = this.list.filter((Dellproduct) => Dellproduct.name !== name);
    this.list = tlist;
  }
  add(event: any) {
    var haveProduct = this.list.filter(
      (Foundproduct) => Foundproduct.name === this.nameNew
    );
    if (haveProduct.length == 0) {
      this.list.push({
        name: this.nameNew,
        quantity: this.numberNew,
        purchased: false,
      });
    } else {
      console.log(typeof this.numberNew);
      console.log(typeof haveProduct[0].quantity);
      haveProduct[0].quantity += this.numberNew;
    }
  }
  setNumber(event: any) {
    this.numberNew = eval(event.target.value);
    console.log(this.numberNew);
  }
  setProduct(event: any) {
    this.nameNew = event.target.value;
    console.log(this.nameNew);
  }
}
