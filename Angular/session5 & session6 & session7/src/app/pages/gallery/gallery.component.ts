import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  isLoaded = false

  constructor(private global:GlobalService){

  }
  gallery:any =[]
  ngOnInit(){
    // next , error , complete
    this.global.gallery().subscribe(res=>{
      this.gallery = res
    },()=>{

    },()=>{
      this.isLoaded = true
    })
  }

}
