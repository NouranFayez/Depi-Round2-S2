import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

  constructor(private activated : ActivatedRoute ,
     private global : GlobalService){
  }
  singlePost : any
  posts:any[] = []
  ngOnInit(){
  //  console.log( this.activated.snapshot.paramMap.get('id'))
   const postId =  this.activated.snapshot.paramMap.get('id')
   this.activated.paramMap.subscribe(param=>{
    console.log(param.get('id'))
    this.global.getSinglePost(param.get('id')).subscribe(res=>{
     console.log(res)
     this.singlePost = res[0]
    })
   })
   this.global.getPosts().subscribe(res=>{
    this.posts = res
   })
  }

}
