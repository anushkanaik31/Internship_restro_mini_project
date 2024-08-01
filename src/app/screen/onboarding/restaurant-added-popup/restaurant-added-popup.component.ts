import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
import { Location } from '@angular/common';


@Component({
  selector: 'app-restaurant-added-popup',
  templateUrl: './restaurant-added-popup.component.html',
  styleUrl: './restaurant-added-popup.component.scss'
})
export class RestaurantAddedPopupComponent {
  handleAccept() {
    // this.location.back();
    this.router.navigate(['/all-restaurants']);
  }
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  restaurantDetails: RestaurantAddRequest = new RestaurantAddRequest();

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const serializedData = params['restaurantAddRequestData'];
      if (serializedData) {
        this.restaurantDetails = JSON.parse(serializedData);
      }
    });
  }

  // -----------------------------------------------------------------
  // getting data from parent to child
  // @Input() restaurantDetails : RestaurantAddRequest = new RestaurantAddRequest()

  // and in parent compo
  // <app-child [restaurantDetails]='restaurantRequestData'>
  //  -----------------------------------------------------------------------

  //now sending data from child to parent
  //  @Output() messageEvent= new EventEmitter<string>();

  //  sendData(){
  //   this.messageEvent.emit('message for parent');
  //  }
  // and in parent.html compo
  // <app-child (messageEvent)='handleEvent($event)'  >
}

