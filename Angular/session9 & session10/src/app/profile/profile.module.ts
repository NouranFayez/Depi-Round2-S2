import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserImageComponent } from './pages/user-image/user-image.component';
import { UserAddressComponent } from './pages/user-address/user-address.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    UserImageComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
