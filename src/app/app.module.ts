import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { QualityComponent } from './quality/quality.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { StrategicallianceComponent } from './strategicalliance/strategicalliance.component';
import { ProductsComponent } from './products/products.component';
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: HomeComponent },
  { path: 'Products', component: HomeComponent },
  { path: 'Manufacturing', component: HomeComponent },
  { path: 'Quality', component: HomeComponent },
  { path: 'StrategicAlliance', component: StrategicallianceComponent },
  { path: 'ContactSs', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    QualityComponent,
    ManufacturingComponent,
    StrategicallianceComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
