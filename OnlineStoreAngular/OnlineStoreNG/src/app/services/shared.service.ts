import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/products';
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:53602/api";

  constructor(private http:HttpClient) { }

  getProductList():Observable<Products[]>{
    return this.http.get<Products[]>(this.APIUrl+'/product')
  }

  seeIfUserExist(user):Observable<any[]>{
    const varrr= this.http.post<any[]>(this.APIUrl+'/Login', user)
    varrr.subscribe((user)=>{localStorage.setItem('user',JSON.stringify(user))})
    return varrr
  }


}
