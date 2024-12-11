import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { AllRestrosRoutingModule } from './all-restros-routing.module'; 
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

@NgModule({
  declarations: [
    AllRestaurantsComponent, 
    RestaurantCardComponent
  ],
  imports: [
    CommonModule,
    AllRestrosRoutingModule, 
    RouterModule 
  ]
})
export class AllRestrosModule { }
