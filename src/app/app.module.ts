import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsFormComponent } from 'src/app/screen/onboarding/details-form/details-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { OnboardingModule } from 'src/app/screen/onboarding/onboarding.module';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Components/footer/footer.component';
import { RestaurantAddedPopupComponent } from 'src/app/screen/onboarding/restaurant-added-popup/restaurant-added-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
