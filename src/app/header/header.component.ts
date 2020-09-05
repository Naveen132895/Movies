import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { LanguageOptionService } from '../Services/language-option.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public langOption : LanguageOptionService, private location: Location) { }

  language: string = localStorage.getItem("defaultLang");
  

  ngOnInit(): void {
  }

  langChange(lang : string) : any {
    localStorage.setItem("defaultLang",lang);
    window.location.reload();
  }

}
