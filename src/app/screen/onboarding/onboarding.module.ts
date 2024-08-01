import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsFormComponent } from './details-form/details-form.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { RestaurantAddedPopupComponent } from './restaurant-added-popup/restaurant-added-popup.component';

@NgModule({
  declarations: [
    DetailsFormComponent,
    AllRestaurantsComponent,
    RestaurantAddedPopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    DetailsFormComponent
  ]
})
export class OnboardingModule { }
