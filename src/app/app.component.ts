import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  technologyUsed = new FormControl('');
  TechnologyUsedFor ='';
  setDefaultValue(){
    //this.technologyUsed.setValue('Angular 8');
    console.log(this.technologyUsed.value);
  }
  title: string ="Angular 8 Examples" ;
    
  showMe: boolean;
  num: number= 0;
  toDate: Date = new Date(); 
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];
  selectedValue: string= 'One';
  size: number = 12;
  color: string= 'red';

  onSave($event){    
    alert("you clicked Save button");
    console.log("Save button is clicked!", $event);    
  }    

  movies: Movie[] =[
  {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
]
onSubmit(form: NgForm) {
  console.log('Your form data : ', form.value);
}
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  private _counter = 1;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this._counter++;
  }
  show =false;
  name="Hello";
  toggle(){
    this.show=!this.show;
  } 
}

 



class Movie {

  title : string;
  director : string;
  cast : string;
  releaseDate : string;

}
class item {
  name: string;
  val: number;
}
