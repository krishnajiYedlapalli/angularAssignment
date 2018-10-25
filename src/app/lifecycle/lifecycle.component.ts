import { Component, OnInit, OnChanges, AfterContentInit,DoCheck, AfterViewInit } from '@angular/core';
import { AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked, DoCheck,AfterViewChecked, OnDestroy,AfterViewInit {

a:string;
b:string;
c:string;
d:string;
e:string;
f:string;
g:string;
h:string;
i:string;
// debugger;

  constructor() { 
   this.a='hi i am constructor';
   console.log(this.a);
  }

  ngOnChanges(){
    this.c='hi this is onchanges';
    console.log(this.c);
  }

  ngOnInit() {
   this.b='hi this is initiation';
   console.log(this.b);
  }

  ngDoCheck(){
    this.f='hi this is after docheck';
    console.log(this.f);
  }

  ngAfterContentInit(){
    this.e='hi this is after content initiation';
    console.log(this.e);
  }

 
  ngAfterContentChecked(){
  this.d='this is after content checked';
  console.log(this.d);
  }

ngAfterViewChecked(){
  this.g='this is view checked';
  console.log(this.g);
}

ngAfterViewInit(){
  this.i='this is view checked';
  console.log('view in it');
}

ngOnDestroy(){
  this.h='this is destroy';
  console.log(this.h);
}









}
