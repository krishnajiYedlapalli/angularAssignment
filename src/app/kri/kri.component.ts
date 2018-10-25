import { Component, OnInit } from '@angular/core';
import { Hero } from './hero1';
@Component({
  selector: 'app-kri',
  templateUrl: './kri.component.html',
  styleUrls: ['./kri.component.css']
})
export class KriComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.content();
  }
 
   str : string='hello';

   hero : Hero ={
    name:'walkingtree',
     id:1  
   }

   content(){
     let a=document.getElementById('cont');
     a.innerHTML='hello dsfdsf';
     a.style.cssText='color:green';
    }

    hello(){
      let a=document.getElementById('cont');
     a.innerHTML='hello hi';
    }
}
