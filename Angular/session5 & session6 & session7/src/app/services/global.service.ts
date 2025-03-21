import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  appName = "Angular App"

  baseUrl = "https://full.faedg.com/public/api"

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=100")
  }

  getSinglePost(id:any):Observable<any>{
    // return this.http.get("https://jsonplaceholder.typicode.com/posts?id="+id)
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  }

  login(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , body )
  }
  searchResult(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/search-by-keyword` , body)
  }
  gallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=1000')
  }
}
