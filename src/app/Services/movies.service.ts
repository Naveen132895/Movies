import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly baseURL = "https://api.themoviedb.org/3/";
  readonly API_KEY = "?api_key=d1aabbd42a1648b1c0dd1e337a57a9e6";

  constructor(private httpClient : HttpClient) { }

  //Getting Currently Playing Movies
  getNow_Playing(language : string,page : number) : any{
    return this.httpClient.get(this.baseURL+"movie/now_playing"+this.API_KEY+"&with_original_language="+language+"&page="+page)
  }

  //Getting Popular Movies
  getPopular(language : string,page : number) : any{
    return this.httpClient.get(this.baseURL+"movie/popular"+this.API_KEY+"&with_original_language="+language+"&page="+page)
  }

   //Getting Popular Movies
   getUpcoming(language : string,page : number) : any{
    return this.httpClient.get(this.baseURL+"movie/upcoming"+this.API_KEY+"&with_original_language="+language+"&page="+page)
  }

  //Getting trailer
  getTrailer(movie_id : any) : any {
    return this.httpClient.get(this.baseURL+"movie/"+movie_id+"/videos"+this.API_KEY);
  }

}
