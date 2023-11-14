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
  show = true
  list = [
    { product: "Tilápia", quantity: 10, purchased: false },
    { product: "Bacalhau",  quantity: 5, purchased: false },
    { product: "Salmão",  quantity: 3, purchased: false }
  ]
  purchase(event:any, product:string){
    this.list.forEach(element => {
      if(element.product === product)
        element.purchased = event.target.checked;
    });
  }
  hidePurchased(event:any){
    this.show = !event.target.checked;
  }
  delete(product:string){
    var count = 0
    var tlist;
    this.list.filter
  }
}
