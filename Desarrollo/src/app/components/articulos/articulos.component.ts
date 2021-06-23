import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
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

}
