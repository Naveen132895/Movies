import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  language: string = localStorage.getItem("defaultLang");
  page : any = 1;
  Now_Playing : any[];
  Now_Playing_Page : number;
  Last_Page : number;
  Error : string = "../../assets/no_image.jpg";

  constructor(
    private movieService : MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.setItem("page" , '1');
    this.listUpcoming();
  }

  listUpcoming() : any {
    this.movieService.getUpcoming(this.language,this.page).subscribe((data) => {
      this.Last_Page = data.total_pages;
      this.Now_Playing = data.results;
      this.Now_Playing_Page = data.page;
    });
  }

  cardClick(movie_id : string) : any{
    this.router.navigate(["trailer/"+movie_id]);
  }

  nextPage() : any {
    this.page = this.page + 1;
    localStorage.removeItem("page");
    localStorage.setItem("page" , this.page);
    this.listUpcoming();
  }

}
