import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Home | AhemLifeCare');

    meta.addTags([
      { name: 'author', content: 'www.ahemlifecare.com' },
      { name: 'keywords', content: 'Ambroxol Hydrochloride Syrup, Terbutaline Sulphate Syrup, GuaiphenesinSyrup, Dextromethorphan Syrup, SucaralfateOral Suspension, Salbutamol Sulphate,Paracetamol, Pheylephrine Hydrochloride,Chlorpheniramine Malete Suspension, AntacidSuspension.' },
      { name: 'description', content: '' }
    ]);
  }

  ngOnInit() {
  }

}
