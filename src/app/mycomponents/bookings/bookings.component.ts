import { Component } from '@angular/core';
import { OrdersService } from '../../myServices/orders.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

    order:any;
    constructor(private orders:OrdersService){}
    ngOnInit()
    {
      this.orders.getOrders().subscribe((res)=>{this.order=res})
      console.table(this.orders)
    }
}
