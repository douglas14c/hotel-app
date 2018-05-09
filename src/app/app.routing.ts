import { Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { HotelsComponent } from "./views/hotels/hotels.component";
import { AboutComponent } from './views/about/about.component';
import { HotelDetailComponent } from './views/hotels/hotel-detail/hotel-detail.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

export const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:_id', component: HotelsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'hotel-detail/:_id', component: HotelDetailComponent },
  { path: 'hotel-detail/:id', component: HotelDetailComponent }
]