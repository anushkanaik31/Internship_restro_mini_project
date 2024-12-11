import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantAddedPopupComponent } from './restaurant-added-popup/restaurant-added-popup.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { AllRestrosModule } from '../all-restros/all-restros.module';  

@NgModule({
  declarations: [
    DetailsFormComponent,
    RestaurantAddedPopupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnboardingRoutingModule,
    AllRestrosModule  
  ],
  exports: [
    DetailsFormComponent, 
  ]
})
export class OnboardingModule { }