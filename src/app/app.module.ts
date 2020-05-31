import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';  
import { NgwWowModule } from 'ngx-wow';
import { NgPaymentCardModule } from 'ng-payment-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { WebService } from './services/web.service';
import { ValidationService } from './services/validation.service';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { InfoUserComponent } from './components/home/info-user/info-user.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomePageHeaderComponent } from './components/home/home-page-header/home-page-header.component';
import { HomePageFooterComponent } from './components/home/home-page-footer/home-page-footer.component';
import { HomePageContentComponent } from './components/home/home-page-content/home-page-content.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { HikingComponent } from './components/activity/hiking/hiking.component';
import { FoodTourComponent } from './components/activity/food-tour/food-tour.component';
import { SunsetViewComponent } from './components/activity/sunset-view/sunset-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    InfoUserComponent,
    HomePageComponent,
    HomePageHeaderComponent,
    HomePageFooterComponent,
    HomePageContentComponent,
    AboutUsComponent,
    HikingComponent,
    FoodTourComponent,
    SunsetViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    AngularFontAwesomeModule,
    NgwWowModule,
    NgPaymentCardModule
  ],
  providers: [WebService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
