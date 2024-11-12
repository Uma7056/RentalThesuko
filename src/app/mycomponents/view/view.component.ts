import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../../myServices/vehicles.service';
import { WishlistService } from '../../myServices/wishlist.service';
import { OrdersService } from '../../myServices/orders.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

    vid:any;
    vehicle:any;
    orderedvehicle:any;
    uname:any;
    uaddress:any;
    utime:any;
    neworder:any;

    constructor(private route:ActivatedRoute,private service: VehiclesService, private wish:WishlistService,private router: Router,private order:OrdersService){}

    ngOnInit()
    {
      this.vid=this.route.snapshot.params['id'];
      console.log(this.vid);
      if(this.vid!==null)
      {
        this.vehicle=this.service.getVehicleById(this.vid);
      }
    }

    addtowishlist(vehicle:any)
    {
      this.wish.addtowishlist(vehicle);
      alert("add to wishlist");
      this.router.navigateByUrl("/user/wishlist")
      
    }
    openvehicle(vehicle:any)
    {
        this.orderedvehicle=vehicle;
    }
    
    orderNow()
    {
      this.neworder=
      {
        vehicleId: this.orderedvehicle.vehicleId,
        vehicleName: this.orderedvehicle.vehicleName,
        rentaPrice: this.orderedvehicle.rentaPrice,
        usename:this.uname,
        address:this.uaddress,
        utime:this.utime
      }
      
      //console.log(this.neworder);
      this.order.addtoorders(this.neworder);
      alert("Order Placed Successfully");
      this.router.navigateByUrl("/user/booking")
    }
}
