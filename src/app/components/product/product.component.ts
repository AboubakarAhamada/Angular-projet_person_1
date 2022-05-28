import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/services/IProduct";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'product-comp',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponenet  implements OnInit{

  inputValue:string = '';
  products:IProduct[] = [];

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


 seachProductByName(){
   this.products = this.productService.seachProductByName(this.inputValue);
 }

 sortPriceByAsc(){
    this.products = this.productService.sortPriceByAsc();
 }

 sortPriceByDesc(){
  this.products = this.productService.sortPriceByDesc();
}

}
