import { Component, Input } from '@angular/core';
import { RestaurantDetails } from 'src/app/models/RestaurantDetails';


@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
  @Input() restaurant: RestaurantDetails ={
    id : 0,
    name: '',
    ownerName: ' ',
    addressDetails: {
      id: 0,
      streetName: ' ',
      city: ' ',
      zipCode: 0
    },
    restroType: ' ',
    contact: ' ',
    email: ' ' 
    };
  }
