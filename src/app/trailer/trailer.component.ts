import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  private id : string;
  Video_Details : any = null;
  
  constructor(private route: ActivatedRoute,private movieService : MoviesService,private router: Router,private location: Location) { 
    this.route.params.subscribe( params => {this.id = params.id} );
    this.getTrailer();
  }

  ngOnInit(): void { 
     
  }

  getTrailer():any{
    this.movieService.getTrailer(this.id).subscribe((data) => {
      this.Video_Details = "https://www.youtube.com/embed/"+data.results[0].key;
    });
  }

  back() : any{
    this.location.back();
  }
}
