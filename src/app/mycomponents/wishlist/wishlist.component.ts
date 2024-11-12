import { Component } from '@angular/core';
import { WishlistService } from '../../myServices/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

    vehicle:any;
    constructor(private wish:WishlistService){}

    ngOnInit()
    {
      this.wish.getVehicles().subscribe((res) => {
        this.vehicle = res;
    });
    console.log(this.vehicle)
}
}
