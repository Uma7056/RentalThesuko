import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './mycomponents/user-dashboard/user-dashboard.component';
import { CarsComponent } from './mycomponents/cars/cars.component';
import { BikesComponent } from './mycomponents/bikes/bikes.component';
import { ViewComponent } from './mycomponents/view/view.component';
import { AddvehicleComponent } from './mycomponents/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './mycomponents/managevehicle/managevehicle.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { AdminDashboardComponent } from './mycomponents/admin-dashboard/admin-dashboard.component';
import { ViewOrdersComponent } from './mycomponents/view-orders/view-orders.component';
import { WishlistComponent } from './mycomponents/wishlist/wishlist.component';
import { BookingsComponent } from './mycomponents/bookings/bookings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    CarsComponent,
    BikesComponent,
    ViewComponent,
    AddvehicleComponent,
    ManagevehicleComponent,
    LoginComponent,
    AdminDashboardComponent,
    ViewOrdersComponent,
    WishlistComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
