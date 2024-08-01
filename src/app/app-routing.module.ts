import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from 'src/app/screen/onboarding/details-form/details-form.component';
import { HomeComponent } from './Components/home/home.component';
import { RestaurantAddedPopupComponent } from 'src/app/screen/onboarding/restaurant-added-popup/restaurant-added-popup.component';
import { AllRestaurantsComponent } from 'src/app/screen/onboarding/all-restaurants/all-restaurants.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path: 'onboarding/details-form',
    component: DetailsFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'popup',
    component: RestaurantAddedPopupComponent
  },
  {
    path: 'all-restaurants',
    component: AllRestaurantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
