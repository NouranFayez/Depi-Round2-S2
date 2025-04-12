import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts:any =[]
  pageSize = 10
  p = 1
  total : any
  constructor(private global:GlobalService){}

  ngOnInit(){
    this.global.getPosts().subscribe(res=>{
      this.posts = res
      this.total = res.length
      console.log(res)
    })
  }

  pageChanged(e:any){
    console.log(e)
    this.p = e
  }

}
