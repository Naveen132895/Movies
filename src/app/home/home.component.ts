import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageOptionService } from '../Services/language-option.service';

import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private movieService : MoviesService,
    private router: Router,
    public langOption : LanguageOptionService
  ) {}

  language: string = localStorage.getItem("defaultLang");
  page : any = localStorage.getItem("page");
  Now_Playing : any[];
  Now_Playing_Page : number;
  Last_Page : number;
  lang_option : any[];
  Error : string = "../../assets/no_image.jpg";
  

  ngOnInit(): void {
    localStorage.setItem("page" , '1');
    this.listNowPlaying();
  }

  listNowPlaying() : any {
    this.movieService.getNow_Playing(this.language,this.page).subscribe((data) => {
      this.Last_Page = data.total_pages;
      this.Now_Playing = data.results;
      this.Now_Playing_Page = data.page;
    });
  }

  cardClick(movie_id : string) : any{
    this.router.navigate(["trailer/"+movie_id]);
  }

  langChange(lang : string) : any {
    localStorage.setItem("defaultLang",lang)
    this.listNowPlaying();
  }

  nextPage() : any {
    this.page = this.page + 1;
    localStorage.removeItem("page");
    localStorage.setItem("page" , this.page);
    this.listNowPlaying();
  }


}
