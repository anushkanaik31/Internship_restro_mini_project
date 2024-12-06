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

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest): Observable <any> {
    console.log(restaurantAddRequest);
    return this.http.post(`${this.baseUrl}/restro/createRestro`, restaurantAddRequest, {
      responseType: 'json',
    });
  }

  getRestroDetails(): Observable<RestaurantDetails[]> {
    return this.http.get<RestaurantDetails[]> (`${this.baseUrl}/restro/getRestroDetails`, {
      headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        })
      });
    }
  }