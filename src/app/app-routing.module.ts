import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './mycomponents/user-dashboard/user-dashboard.component';
import { BikesComponent } from './mycomponents/bikes/bikes.component';
import { ViewComponent } from './mycomponents/view/view.component';
import { ViewOrdersComponent } from './mycomponents/view-orders/view-orders.component';
import { WishlistComponent } from './mycomponents/wishlist/wishlist.component';
import { BookingsComponent } from './mycomponents/bookings/bookings.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { CarsComponent } from './mycomponents/cars/cars.component';
import { AddvehicleComponent } from './mycomponents/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './mycomponents/managevehicle/managevehicle.component';
import { AdminDashboardComponent } from './mycomponents/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserDashboardComponent,
    children:[
      {path:'bike',component:BikesComponent},
      {path:'car',component:CarsComponent},
      {path:'view/:id',component:ViewComponent},
      {path:'order',component:ViewOrdersComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'booking',component:BookingsComponent}
    ]
  },
  {path:'admin',component:AdminDashboardComponent,
    children:[
      {path:'car',component:CarsComponent},
      {path:'bike',component:BikesComponent},
      {path:'add',component:AddvehicleComponent},
      {path:'manage',component:ManagevehicleComponent},
      {path:'orders',component:ViewOrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
