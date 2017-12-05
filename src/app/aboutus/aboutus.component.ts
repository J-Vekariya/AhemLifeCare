import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('About Us');
    
        meta.addTags([
          { name: 'asdad', content: 'Casdasdsadasdasdoursetro.com' },
          { name: 'asdds', content: 'angular seo, angasdasdasdasdular 4 universal, etc' },
          { name: 'descraasdasdsiption', content: 'This is my Angasdasdadasdular SEO-based App, enjoy it!' }
        ]);
   }

  ngOnInit() {
  }

}
