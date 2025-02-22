import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : any = []
  constructor(private global:GlobalService){
    console.log(this.global.getPosts())

    // subscribe ==> next , error , complete
    this.global.getPosts().subscribe(res=>{
      console.log(res)
      this.posts = res
    })

  }

}
