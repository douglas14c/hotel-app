import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../../models/hotel';
import { CarouselService } from '../../../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  hotel: Hotel;

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
  }

  get(id: string) {
    this.carouselService.getCarousel(id);
  }
}
