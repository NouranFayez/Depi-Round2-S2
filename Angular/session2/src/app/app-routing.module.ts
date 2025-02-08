import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  // localhost:4200 ==> IndexComponent
  // localhost:4200/about ==> AboutComponent
  // localhost:4200/contact ==> ContactComponent
  {path : "" , component : IndexComponent},
  {path : "about" , component : AboutComponent },
  {path : "contact" , component : ContactComponent },
  {path : "**" , component : ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
