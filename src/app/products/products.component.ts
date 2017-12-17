import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category:any;
  products:any;
  subCategory:any; 
  subCategories:any; 
  constructor(private api:ApiServiceService) {
    this.category = JSON.parse(localStorage.getItem('category'));
    this.subCategory = JSON.parse(localStorage.getItem('subCategory'));
    this.api.getSubcategories(this.category._id).subscribe((data)=>{
      console.log(data);
      this.subCategories = data.Data;
    },(err)=>{
      console.log(err);
    });
    this.api.getProducts(this.subCategory._id).subscribe((data)=>{
      console.log(data);
      this.products = data.Data;
    },(err)=>{
      console.log(err);
    })
   }

  ngOnInit() {
  }

}
