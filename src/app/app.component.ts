import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentTab:string="home";
  categories:any = [];
  subCategories:any = {};
  constructor(private router:Router, private api:ApiServiceService){
    this.router.events.subscribe((url:any) => {
      this.currentTab = url.url.split('/')[1].toLowerCase();
      console.log(url.url.split('/')[1].toLowerCase());
    });
  }
  ngOnInit(){
    $(document).ready(function(){
      $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
    
    this.api.getCategories().subscribe((data)=>{
      console.log(data);
      this.categories = data.category;
      data.category.forEach(element => {
        this.subCategories[element._id] = [];  
      });
      data.sub_category.forEach(element => {
        this.subCategories[element.parent_id].push(element);
      });
    },(err)=>{
      console.log(err);
    })

  }

  openProducts(subCat,category){
    localStorage.setItem('category',JSON.stringify(category));
    localStorage.setItem('subCategory',JSON.stringify(subCat));
    this.router.navigate(['Products']);
  }
}
