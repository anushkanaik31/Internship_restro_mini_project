import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
import { RestaurantDetails } from 'src/app/models/RestaurantDetails'

@Injectable({
  providedIn: 'root',
})

export class BackendService {
  private baseUrl = 'https://c2d9-2401-4900-1c43-3a8b-54c4-72bd-bbc4-6946.ngrok-free.app';

  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest): Observable<Object> {
    console.log(restaurantAddRequest);
    return this.http.post( `${this.baseUrl}/restro/addNew`,
      restaurantAddRequest, {
      responseType: 'json'
      });
}

  RestaurantDetails: any

  getRestroDetails() {
    this.http.get(
      'https://1ca7-2401-4900-1c44-8479-5099-aa35-5647-41a7.ngrok-free.app/restro/getRestroDetails',
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      }
    )
    .subscribe({ 
      next: (response ) => {
        this.RestaurantDetails = response
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      },
    });
    
    return this.RestaurantDetails
  }
}