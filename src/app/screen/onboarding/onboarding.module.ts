import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsFormComponent } from './details-form/details-form.component';
import { RestaurantAddedPopupComponent } from './restaurant-added-popup/restaurant-added-popup.component';
import { AllRestroModule } from './all-restro/all-restro.module';

@NgModule({
  declarations: [
    DetailsFormComponent,
    RestaurantAddedPopupComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AllRestroModule
  ],
  exports:[
    DetailsFormComponent
  ]
})
export class OnboardingModule { }

export interface RestaurantAddressDetails {
  id: number;
  streetName: string;
  city: string;
  zipCode: number;
}
export interface RestaurantDetails {
  id: number;
  name: string;
  ownerName: string;
  addressDetails: RestaurantAddressDetails;
  restroType: string;
  contact: string;
  email: string;
}
