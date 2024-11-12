import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from '../../myServices/vehicles.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {

    bikes:any;
    user:any;
    username:any;
    
    constructor(private route:Router,private service:VehiclesService){}

    ngOnInit()
    {
      this.user=localStorage.getItem("Logginin");
      this.username=JSON.parse(this.user).username;

      this.service.getBikes().subscribe((data)=>{this.bikes=data})
     
    }
    openvehicel(id:any)
    {
      this.route.navigateByUrl('/user/view/'+id);
    }
}
