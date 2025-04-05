import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserImageComponent } from './pages/user-image/user-image.component';
import { UserAddressComponent } from './pages/user-address/user-address.component';

const routes: Routes = [
  // /profile ==> profileComponent
  // /profile/user-details ==> user-profile
  // /profile/user-image ==> user-image
  // /profile/user-address ==> user-address

  // grouping route
  { path: '', component: ProfileComponent , children:[
    {path:'user-details' , component:UserProfileComponent},
    {path:'user-image' , component:UserImageComponent},
    {path:'user-address' , component:UserAddressComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
