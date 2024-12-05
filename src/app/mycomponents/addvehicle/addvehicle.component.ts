import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from '../../myServices/vehicles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vehicle } from '../../myServices/vehicle';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrl: './addvehicle.component.css'
})
export class AddvehicleComponent {
  
  response:any;
  addproduct:FormGroup=new FormGroup({})

  constructor(private fb:FormBuilder,private server: VehiclesService,private route:Router){
    this.addproduct=this.fb.group({
      vehicleId:['',Validators.required],
      vehicleName:['',Validators.required],
      vehicleCompany:['',Validators.required],
      rentaPrice:['',Validators.required],
      availableTime:['',Validators.required],
      fuelType:['',Validators.required],
      seatingCapacity:['',Validators.required],
      vehicleType:['',Validators.required],
      vehicleImage:['',Validators.required],
      rating:['',Validators.required]
    })
  }

  addnow()
  {
    this.response=this.server.addvehicels(this.addproduct.value);
    alert("Vechicle added successfully");
    const vehicletype = this.addproduct.get('vehicleType')?.value;
    if(vehicletype=='Car')
    {
      this.route.navigateByUrl("admin/car")
    }
    else
    {
      this.route.navigateByUrl("admin/bike")
    }
    
  }
}
