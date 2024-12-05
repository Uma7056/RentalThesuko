import { Component } from '@angular/core';
import { VehiclesService } from '../../myServices/vehicles.service';

@Component({
  selector: 'app-managevehicle',
  templateUrl: './managevehicle.component.html',
  styleUrl: './managevehicle.component.css'
})
export class ManagevehicleComponent {

    vehicle:any;
    updatepro:any;
    constructor(private server:VehiclesService){}

    ngOnInit()
    {
      this.server.getAllvehicels().subscribe((data)=>this.vehicle=data);
    }

    deletemow(pid:any)
    {
      this.server.deletevehicle(pid)
    }

    productselected(pro:any)
    {
      this.updatepro=pro;
    }

    updatenow()
    {
      this.server.updatevehicle(this.updatepro.vehicleId,this.updatepro);
    }


  
}