import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }
   vehicles: vehicle[] = [
    // Cars
    {
      vehicleId: 1,
      vehicleName: "Swift",
      vehicleCompany: "Maruti Suzuki",
      rentaPrice: 1000,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 4,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      rating: 4.5
    },
    {
      vehicleId: 2,
      vehicleName: "Creta",
      vehicleCompany: "Hyundai",
      rentaPrice: 1500,
      availableTime: "9 AM to 5 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/cretahighlightbig2.jpg",
      rating: 4.7
    },
    {
      vehicleId: 3,
      vehicleName: "Innova",
      vehicleCompany: "Toyota",
      rentaPrice: 2000,
      availableTime: "8 AM to 8 PM",
      fuelType: "Diesel",
      seatingCapacity: 7,
      vehicleType: "Car",
      vehicleImage: "https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cdni.autocarindia.com/Galleries/20201015102234_2021-Toyota-Innova-Crysta-facelift-grey-studio.jpg&w=872&h=578&q=75&c=1",
      rating: 4.8
    },
    {
      vehicleId: 4,
      vehicleName: "Baleno",
      vehicleCompany: "Maruti Suzuki",
      rentaPrice: 1100,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg",
      rating: 4.4
    },
    {
      vehicleId: 5,
      vehicleName: "XUV300",
      vehicleCompany: "Mahindra",
      rentaPrice: 1300,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmahindra%2Fxuv300%2Fmahindra-xuv300-galaxy-grey.png%3Fv%3D1628575678&w=640&q=75",
      rating: 4.6
    },
    {
      vehicleId: 6,
      vehicleName: "Tiago",
      vehicleCompany: "Tata",
      rentaPrice: 900,
      availableTime: "9 AM to 5 PM",
      fuelType: "Petrol",
      seatingCapacity: 4,
      vehicleType: "Car",
      vehicleImage: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/39345/tiago-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80",
      rating: 4.2
    },
    {
      vehicleId: 7,
      vehicleName: "City",
      vehicleCompany: "Honda",
      rentaPrice: 1600,
      availableTime: "10 AM to 7 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80",
      rating: 4.7
    },
    {
      vehicleId: 8,
      vehicleName: "Harrier",
      vehicleCompany: "Tata",
      rentaPrice: 1800,
      availableTime: "9 AM to 6 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9368/1697532960290/front-left-side-47.jpg",
      rating: 4.6
    },
    {
      vehicleId: 9,
      vehicleName: "Seltos",
      vehicleCompany: "Kia",
      rentaPrice: 1700,
      availableTime: "8 AM to 8 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/seltos/KIA_Seltos_KV_1920.jpg",
      rating: 4.5
    },
    {
      vehicleId: 10,
      vehicleName: "Alto",
      vehicleCompany: "Maruti Suzuki",
      rentaPrice: 800,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 4,
      vehicleType: "Car",
      vehicleImage: "https://images.carandbike.com/car-images/large/maruti-suzuki/alto-800/maruti-suzuki-alto-800.jpg?v=45",
      rating: 4.1
    },
    
    // Bikes
    {
      vehicleId: 11,
      vehicleName: "Pulsar 150",
      vehicleCompany: "Bajaj",
      rentaPrice: 500,
      availableTime: "9 AM to 5 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://wallpapers.com/images/hd/pulsar-150-in-a-field-glh7quen4nb9jooo.jpg",
      rating: 4.3
    },
    {
      vehicleId: 12,
      vehicleName: "Apache RTR 160",
      vehicleCompany: "TVS",
      rentaPrice: 550,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://bd.gaadicdn.com/processedimages/tvs/tvs-apache/source/tvs-apache664831fa05402.jpg",
      rating: 4.4
    },
    {
      vehicleId: 13,
      vehicleName: "FZ S V3",
      vehicleCompany: "Yamaha",
      rentaPrice: 600,
      availableTime: "8 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/600x337/bw/ec/41372/Yamaha-FZ-S-V3-164598.jpg?wm=2&q=75",
      rating: 4.5
    },
    {
      vehicleId: 14,
      vehicleName: "Bullet 350",
      vehicleCompany: "Royal Enfield",
      rentaPrice: 700,
      availableTime: "9 AM to 5 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://www.financialexpress.com/wp-content/uploads/2024/05/Royal-Enfield-Classic-350-1-1.jpg?w=1024",
      rating: 4.6
    },
    {
      vehicleId: 15,
      vehicleName: "Duke 200",
      vehicleCompany: "KTM",
      rentaPrice: 750,
      availableTime: "8 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGt0bSUyMGR1a2UlMjAyMDB8ZW58MHx8MHx8fDA%3D",
      rating: 4.7
    },
    {
      vehicleId: 16,
      vehicleName: "Hornet 2.0",
      vehicleCompany: "Honda",
      rentaPrice: 600,
      availableTime: "9 AM to 7 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2020-12%2Fa4m2775_honda-hornet-20-review_625x300_11_December_20.jpg&w=3840&q=75",
      rating: 4.4
    },
    {
      vehicleId: 17,
      vehicleName: "MT 15",
      vehicleCompany: "Yamaha",
      rentaPrice: 800,
      availableTime: "10 AM to 8 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://w0.peakpx.com/wallpaper/880/47/HD-wallpaper-mt-15-motorcycle-motor-sport-bike-thumbnail.jpg",
      rating: 4.8
    },
    {
      vehicleId: 18,
      vehicleName: "Gixxer SF",
      vehicleCompany: "Suzuki",
      rentaPrice: 650,
      availableTime: "10 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://is.zobj.net/image-server/v1/images?r=DRt4i7-tK9WJbSmnlcYC8rE3EBmK2MsRtnEaoAvuEMCjmKqQWgvS1mpz97mXpwR9qY8_ON1BS7VQ3tMET_-8DAxzI5opg8ckTNahDD-7etgYoEET5BrHycN1pTu3keoCU4K5-dhBhUOD8Rmd97BbriZcagDRzkVgxwiQUq5LlLpNEWEZKA__d0WJBQ1_BdPcobS-aaXnwqWh7FBOe6ED_-HDTYP1NNmkPV959g",
      rating: 4.5
    },
    {
      vehicleId: 19,
      vehicleName: "Dominar 400",
      vehicleCompany: "Bajaj",
      rentaPrice: 900,
      availableTime: "9 AM to 7 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://i.pinimg.com/originals/25/da/a5/25daa5f74a548b4537e53d4155290657.jpg",
      rating: 4.7
    },
    {
      vehicleId: 20,
      vehicleName: "XBlade",
      vehicleCompany: "Honda",
      rentaPrice: 500,
      availableTime: "8 AM to 6 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://www.indiacarnews.com/wp-content/uploads/2018/02/Honda-X-Blade.jpg",
      rating: 4.3
    }
  ];

  getAllvehicels()
  {
    return of(this.vehicles);
  }

  addvehicels(newvehicle:any)
  {
    this.vehicles.push(newvehicle);
    return "added";
  }
  getVehicleById(id:any)
  {
    return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
  }

  deletevehicle(id:any)
  {
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    if(index != -1)
    {
      this.vehicles.splice(index,1)
    }
  }

  getBikes()
  {
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Bike"))
  }

  getCars()
  {
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Car"))
  }

  updatevehicle(id:any,newvehicle:any)
  {
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    if(index != -1)
    {
      this.vehicles.splice(index,1,newvehicle);
    }
  }
  
}
