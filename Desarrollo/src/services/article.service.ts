import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Article } from 'src/app/models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  URL_API = 'http://localhost:4000/api/articles'
  

  articles : any[] =[];
  

  constructor(private http: HttpClient){}

  getArticles(){
    return this.http.get<Article[]>(this.URL_API);
    
  }

}
