import { Injectable } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable ({providedIn: 'root'})
export class UrlService{

  constructor( @Inject(DOCUMENT) private document: Document){

  }

  goToUrl(url : string) {
   // this.document.location.href = 'https://'+url;
   if (url.includes("https://"))
   {
    window.open(url, "_blank");
   }else
    window.open('https://'+url, "_blank");
}
}
