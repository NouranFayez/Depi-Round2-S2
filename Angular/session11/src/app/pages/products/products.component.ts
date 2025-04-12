import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products :any
  pageSize=10
  p = 1
  total : any

  @ViewChild('productsContainer') productsSection! :ElementRef; 
    constructor(private global : GlobalService , private spinner : NgxSpinnerService){

    }
    ngOnInit(){
      
    this.productsList(1 , 10)
    }

    pageChanged(e:any){
      this.p = e
      this.productsList(e , 10)
      this.productsSection.nativeElement.scrollIntoView({behavior : 'smooth'})
    }


    productsList(page:any , limit:any){
      this.spinner.show()
      this.global.getProducts(page , limit).subscribe(res=>{
        // this.products = res.data
        this.products = res
        this.total = res.count
      },()=>{

      },()=>{
        this.spinner.hide()
      })
    }

}
