import { Component } from '@angular/core';
import { VehiclesService } from '../../myServices/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  cars:any;
  user:any;
  username:any;
    
  constructor(private service:VehiclesService,private route:Router){}

  ngOnInit()
  {
    this.service.getCars().subscribe((data)=>{this.cars=data})

    this.user=localStorage.getItem("Logginin");
      this.username=JSON.parse(this.user).username;
  }
  openvehicel(id:any)
    {
      this.route.navigateByUrl('/user/view/'+id);
    }
}
