import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { RestaurantDetails } from 'src/app/models/RestaurantDetails';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit  {
  restaurants : RestaurantDetails[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.getAllRestro();
  }

  getAllRestro(): void{
    this.backendService.getRestroDetails().subscribe({
      next: (response: RestaurantDetails[]) => {
        console.log('API Response:', response);
        this.restaurants = response;
        console.log('Restaurants array:',this.restaurants);
      },
      error: (err: any) => {
        console.error('API Error:', err);
      }
      });
    }
  }