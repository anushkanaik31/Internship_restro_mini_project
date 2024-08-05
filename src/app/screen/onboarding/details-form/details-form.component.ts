import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
import { BackendService } from 'src/app/services/backend.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent {
  restaurantAddRequest: RestaurantAddRequest = new RestaurantAddRequest();
  restaurantDetails: FormGroup;
  isPopupVisible = false;

  constructor(
    private fb: FormBuilder,
    private backend: BackendService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.restaurantDetails = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      owner: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required,  Validators.pattern('^[0-9]{6}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      type: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (confirm("Restaurant details about to submit")) {
      console.log('Restaurant details submitted successfully');
      this.createRequest(this.restaurantDetails);
      this.restaurantDetails.reset();
    }
  }

  createRequest(details: FormGroup) {
    this.restaurantAddRequest.name = details.value['name'];
    this.restaurantAddRequest.owner = details.value['owner'];
    this.restaurantAddRequest.streetName = details.value['street'];
    this.restaurantAddRequest.city = details.value['city'];
    this.restaurantAddRequest.zipCode = details.value['zipcode'];
    this.restaurantAddRequest.type = details.value['type'];
    this.restaurantAddRequest.contact = details.value['phone'];
    this.restaurantAddRequest.email = details.value['email'];
    this.processRequest(this.restaurantAddRequest);
  }

  processRequest(restaurantAddRequestData: RestaurantAddRequest) {
    this.backend.onboardRestaurant(restaurantAddRequestData). subscribe({
      next: (response) => {
        this.isPopupVisible = true;
        this.cd.detectChanges();
      }
    })
  }

  handleClose(val: boolean): void {
    this.isPopupVisible = false;
  }
}