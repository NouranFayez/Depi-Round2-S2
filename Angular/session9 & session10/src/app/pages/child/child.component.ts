import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() num : any

  text = "Angular"

  constructor(){
    console.log(this.num) // undefined
    console.log('constrctor')
  }

  ngOnChanges(e:any){
    console.log(e)
    console.log('ng on changes')
  }
  ngOnInit(){
    console.log('ng on init')
  }
  ngDoCheck(){
    console.log('ng Do Check')
  }
  ngAfterContentInit(){
    console.log('ng on after content init')
  }
  ngAfterContentChecked(){
    console.log('ng on after content checked')
  }
  ngAfterViewInit(){
    console.log('ng on after view init')
  }

  ngAfterViewChecked(){
    console.log('ng on after view checked')

  }
  ngOnDestroy(){
    console.log('ng on Destroy')
  }


}
