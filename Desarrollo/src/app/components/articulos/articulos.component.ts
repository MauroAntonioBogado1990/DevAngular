import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public articleService : ArticleService) { }

  ngOnInit(): void {
       this.getArticles();
  }

  getArticles(){
    this.articleService.getArticles().subscribe(
      res => {
        this.articleService.articles = res;
      },
      err => console.error(err)    
    )
  }
  addArticle(form:NgForm){
     
    this.articleService.createArticle(form.value).subscribe(
       res =>{
         this.getArticles();
         form.reset();
       },
       err => console.error(err)
     )
  }
  deleteArticle(id: string){
      if(confirm('¡Esta seguro de borrar el articulo?')){
        this.articleService.deleteArticle(id) 
      }
      
    }

}
