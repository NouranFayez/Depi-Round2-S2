import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }

  getProducts(page :any , limit : any):Observable<any>{
    return this.http.get(`https://full.faedg.com/public/api/products/${page}/${limit}`)
  }
}
