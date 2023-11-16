import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  show = true;
  numberNew = 0;
  nameNew = "";
  list = [
    { product: "Tilápia", quantity: 10, purchased: false },
    { product: "Bacalhau",  quantity: 5, purchased: false },
    { product: "Salmão",  quantity: 3, purchased: false }
  ];
  purchase(event:any, name:string){
    this.list.forEach(element => {
      if(element.product === name)
        element.purchased = event.target.checked;
    });
  }
  hidePurchased(event:any){
    this.show = !event.target.checked;
  }
  delete(name:string){
    var count = 0;
    var tlist;
    tlist = this.list.filter(Dellproduct=>Dellproduct.product !== name);
    this.list = tlist;
  }
  add(event:any){
    var haveProduct = this.list.filter(Foundproduct=> Foundproduct.product === this.nameNew);
    if(haveProduct.length == 0){
      this.list.push( { product: this.nameNew, quantity: this.numberNew, purchased: false })
    }
    else{
      console.log(typeof(this.numberNew))
      console.log(typeof(haveProduct[0].quantity))
      haveProduct[0].quantity += this.numberNew
    }
  }
  setNumber(event: any){
    this.numberNew = eval(event.target.value);
    console.log(this.numberNew);
  }
  setProduct(event: any){
    this.nameNew = event.target.value;
    console.log(this.nameNew);
  }
}
