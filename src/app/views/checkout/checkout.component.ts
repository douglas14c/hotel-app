import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Checkout } from '../../models/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: Checkout = new Checkout();

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }


  Order() {
    return this.checkoutService.checkoutOrder(this.checkout);
    console.log(this.checkout);
  }

  showPortion() {
    return this.checkoutService.portion;
  }
}
