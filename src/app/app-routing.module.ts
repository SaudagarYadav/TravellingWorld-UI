import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';

const routes: Routes = [
{
  path:'',
  component:HomePageComponent
},{
  path:'login',
  component:LoginComponent
},{
  path:'signUp',
  component:SignUpComponent
},{
  path:'aboutUs',
  component:AboutUsComponent
},{
  path:'contactUs',
  component:ContactUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
