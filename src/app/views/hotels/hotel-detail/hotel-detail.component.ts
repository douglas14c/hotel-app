import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarouselService } from '../../../services/carousel.service';
import { DetailService } from '../../../services/detail.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(private acvtRoute: ActivatedRoute, private carouselService: CarouselService, private detailService: DetailService) {

  }

  canShow: boolean = false;
  images: string[] = [];
  hotelId: string;

  details: string[] = [];
  hotelDetails: string;

  async ngOnInit() {
    this.hotelId = this.acvtRoute.snapshot.params["_id"];
    await this.carouselService.getCarousel(this.hotelId).then((res) => {
      this.images = res.imagePath;
      this.canShow = true;
    });

    this.hotelDetails = this.acvtRoute.snapshot.params["_id"];
    this.detailService.getDetail(this.hotelDetails).then((res) => {
      console.log(res);
      this.details = res.details;
    });
  }

}
