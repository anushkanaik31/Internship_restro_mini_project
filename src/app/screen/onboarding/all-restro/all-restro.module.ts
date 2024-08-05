import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants/all-restaurants.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



@NgModule({
  declarations: [
    AllRestaurantsComponent,
    RestaurantCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllRestaurantsComponent,
    RestaurantCardComponent
  ]
})
export class AllRestroModule { }
