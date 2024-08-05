import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { RestaurantDetails } from 'src/app/models/RestaurantDetails';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent  {
  allRestaurants : any = [];
  constructor(private backendService: BackendService){
    this.getAllRestro();
  }

  restaurants : RestaurantDetails[] = []
  getAllRestro(): void{
    this.allRestaurants = this.backendService.getRestroDetails()
  }
}
