import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ITrendingMovies } from '../home/home.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  private http = inject(HttpClient)
  type = ''
   id!:number
   url = ''
   movies!:ITrendingMovies[]
   movie: any

   private router = new ActivatedRoute()

  ngOnInit(): void {
    this.type = this.router.snapshot.params['type']
    this.id = this.router.snapshot.params['id']

    if(this.type === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-movies.json'
    }else if(this.type === 'theatre'){
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json'
    }
    this.getMovie()


  }


  getMovie(){
   this.http.get(this.url).subscribe(data =>{
     this.movies = data as any as ITrendingMovies[]

     let index = this.movies.findIndex((movie :{id:number})=> movie.id === this.id)
     if(index > -1){
        this.movie = this.movies[index]
     }
   })
  }
}
