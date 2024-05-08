import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { NgbModalModule, NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../../feature/star-rating/star-rating.component';
import { Router } from '@angular/router';

 export interface ITrendingMovies {
  cover: string,
  id: number,
  name: string,
  rating: number,
  reviews: []
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgFor, NgbModule, NgbRatingModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private http = inject(HttpClient)
  trendingMovies!: ITrendingMovies[]
  popularMovies!: ITrendingMovies[]
  theatreMovies!: ITrendingMovies[]


  private router = new Router()

  // rating = 3.14;


  // ariaValueText(current: number, max: number) {
  // 	return `${current} out of ${max} hearts`;
  // }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getPopularMovies()
    this.gettheatreMovies()

  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies as any as ITrendingMovies[]

    })
  }
  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies as any as ITrendingMovies[]

    })



  }

  gettheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe(movies => {
      this.theatreMovies = movies as any as ITrendingMovies[]
    })

  }

  goToMovie(type:string, id:number){
    this.router.navigate(['movie', type, id ])
  }



}
