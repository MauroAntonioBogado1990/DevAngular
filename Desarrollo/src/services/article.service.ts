import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Article } from 'src/app/models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  URL_API = 'http://localhost:4000/api/articles'
  
  selectedArticle : any = {
    name: '',
    color:'',
    size:'',
    company:'',
    price:0,
    description:''
  };
  articles : any[] =[];
  
  

  constructor(private http: HttpClient){}

  getArticles(){
    return this.http.get<Article[]>(this.URL_API);
    
  }
  createArticle(article: Article) {
    return this.http.post(this.URL_API, article);

  }

  deleteArticle(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
