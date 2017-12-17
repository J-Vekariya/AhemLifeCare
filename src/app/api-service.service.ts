import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import { API_URL } from './app.module';
import {Observable} from 'rxjs';
@Injectable()
export class ApiServiceService {

  constructor(private http:Http) { }
  getCategories():Observable<any>{
    return this.http.get(API_URL + 'categories').map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getSubcategories(id):Observable<any>{
    return this.http.get(API_URL + 'subCategory/' + id).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getProducts(id):Observable<any>{
    return this.http.get(API_URL + 'product/' + id).map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
