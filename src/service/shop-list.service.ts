import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  constructor() { }

  initItems(){
    var storedData = localStorage.getItem('list');
    if (storedData !== null)
      return;

      let initalData = [
          { name: "Tilápia", quantity: 10, purchased: false },
          { name: "Bacalhau",  quantity: 5, purchased: false },
          { name: "Salmão",  quantity: 3, purchased: false }
        ]
        localStorage.setItem('list', JSON.stringify(initalData));
  }
  getItems() : Product[]
  {
    var storedData = localStorage.getItem('list');
    if (storedData === null)
      return [];

    let data = JSON.parse(storedData)
    return data
  }
}
