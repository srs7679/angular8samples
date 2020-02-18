import {Component,Input, OnInit,OnDestroy,OnChanges} from '@angular/core';
@Component({
  selector :"hello",
  template :'<h1> {{name}}!! </h1>',
  styles   :['h1{font-family:Lato;}']
})

export class HelloComponent implements OnInit,OnDestroy,OnChanges{
    @Input() name :String;
    timeoutInstance =null;
    constructor(){}
    ngOnChanges(changes){
      console.log('on changes',changes);
    }
    ngOnInit(){

        console.log("Component Initlalized");
        //this.timeoutInstance=setInterval(() => {
          //console.log(new Date());
        //},1000)
    }
    ngOnDestroy(){
      console.log("Component Destroyed... ");
      //if(this.timeoutInstance){
        //clearInterval(this.timeoutInstance);
      //}
      
  }
}
