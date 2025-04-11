import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { ChildComponent } from './pages/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    ProductsComponent,
    ProfileComponent,
    ChildComponent,
    ParentComponent,
    CategoriesComponent,
    SingleCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
