import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HotelsComponent } from './views/hotels/hotels.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HotelService } from './services/hotel.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ROUTES } from './app.routing';
import { AboutComponent } from './views/about/about.component';
import { HotelDetailComponent } from './views/hotels/hotel-detail/hotel-detail.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { HotelComponent } from './views/hotels/hotel/hotel.component';
// import { CarouselComponent } from './views/hotels/hotel-detail/carousel/carousel.component';
import { DescriptionComponent } from './views/hotels/hotel-detail/description/description.component';
import { CarouselService } from './services/carousel.service';
import { DetailService } from './services/detail.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    NavbarComponent,
    AboutComponent,
    HotelDetailComponent,
    CheckoutComponent,
    HotelComponent,
    // CarouselComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [HotelService, CarouselService, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
