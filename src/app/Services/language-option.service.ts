import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageOptionService {

  constructor() { }

  lang_option : any[] = [
    { name : "", value : ""},
    { name : "English", value : "en"},
    { name : "Hindi", value : "hi"},
    { name : "Kannada", value : "kn"},
    { name : "Malayalam", value : "ml"},
    { name : "Tamil", value : "ta"},
    { name : "Telugu", value : "te"}
  ];
  
}
