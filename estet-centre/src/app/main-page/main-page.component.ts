import { Component } from '@angular/core';
import { advantagesList, mainPagePeople, slidesData } from './data.constants';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  peopleData = mainPagePeople;
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    nav: true,
    items: 1,
    center: true,
  };

  slidesData = slidesData;

  advantagesList = advantagesList;
}
