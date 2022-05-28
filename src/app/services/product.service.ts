import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: IProduct[] = [
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
      "name": "iphone pro max",
      "price": 4800,
      "isInStock": true
    },
    {
      "name": "Smart watch",
      "price": 900,
      "isInStock": false
    },
    {
      "name": "Tablette Samsung",
      "price": 1150,
      "isInStock": true
    },
    {
      "name": "Mac Book",
      "price": 7700,
      "isInStock": true
    }
  ]


 getProducts(): IProduct[]{
   return this.products;
 }

 seachProductByName(inputValue:string){
   if(inputValue.length!=0){
    return this.products.filter(p => p.name.includes(inputValue));
   }
   else{
     return this.products;
   }
 }

 sortPriceByAsc(){
    return this.products.slice().sort((p1, p2) => p2.price - p1.price )
 }

 sortPriceByDesc(){
  return this.products.slice().sort((p1, p2) => p1.price - p2.price )
}

}
