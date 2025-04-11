import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ParentComponent } from './pages/parent/parent.component';
import { authGuard } from './guards/auth.guard';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { canActivateChildGuard } from './guards/can-activate-child.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {path:'' , component: IndexComponent},
  {path:'login' , component: LoginComponent , canActivate:[authGuard] , canDeactivate:[canDeactivateGuard]},
  {path:'products'  , component : ProductsComponent , canActivateChild:[canActivateChildGuard], children:[
    // {path:'' , component : ProductsComponent},
    {path: "categories" , component:CategoriesComponent},
    {path: "categories/:id" , component:SingleCategoryComponent},
  ]},
  // localhost:4200/propoducts
  // localhost:4200/propoducts/categories
  // localhost:4200/propoducts/categories/2

  {path:'parent' , component: ParentComponent},



  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  // {path:'profile' , component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
