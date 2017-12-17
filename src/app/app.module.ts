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
import { LoginComponent } from './login/login.component';
import { ApiServiceService } from './api-service.service';
import { HttpModule } from '@angular/http';
export const API_URL = "https://ahem-life-care-backend.herokuapp.com/api/";
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Manufacturing', component: ManufacturingComponent },
  { path: 'Quality', component: QualityComponent },
  { path: 'StrategicAlliance', component: StrategicallianceComponent },
  { path: 'ContactUs', component: ContactusComponent },
  { path: 'login', component: LoginComponent},
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
    ProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ang4-seo-pre'}),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
