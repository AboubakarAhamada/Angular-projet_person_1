import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {
      "name": "téléphone android",
      "price": 1200,
      "isInStock": true
    },
    {
      "name": "téléphone iphone",
      "price": 2900,
      "isInStock": false
    },
    {
      "name": "téléphone wiko",
      "price": 950,
      "isInStock": true
    },
    {
      "name": "iphone prox max",
      "price": 4800,
      "isInStock": true
    }
  ]


 inputValue = '';
 list = this.products;

 seachProductByName(): void{
   if(this.inputValue.length!=0){
    this.products = this.products.filter(p => p.name.includes(this.inputValue));
   }
   else{
     this.products = this.list;
   }
 }

 sortPriceByAsc(){
    this.products = this.products.slice().sort((p1, p2) => p2.price - p1.price )
 }

 sortPriceByDesc(){
  this.products = this.products.slice().sort((p1, p2) => p1.price - p2.price )
}
}
