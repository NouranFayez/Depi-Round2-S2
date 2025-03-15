import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'posts' , component:PostsComponent},
  {path:'posts/:id' , component:SinglePostComponent},
  {path:'about' , component:AboutComponent},
  {path:'login' , component:LoginComponent},
  {path:'search-result' , component:SearchResultComponent},
  {path:'gallery' , component:GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
