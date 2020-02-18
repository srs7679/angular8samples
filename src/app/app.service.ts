import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() 
export class AppService{
constructor(private http:HttpClient){}

getTodoData(todo:number=1){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/${todo}')
}
}