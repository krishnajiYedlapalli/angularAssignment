import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   title = "App" ;  
   secondTitle=5;
   date=new Date(); 
   decimalValue=122.1231232;
  asendingOrder:number[]=[23,56,2,89,65,1];
  descendingOrder:number[]=[23,56,2,89,65,1];
  valueRange:number=0;
  inputClick(val:number){
      this.valueRange=val;  
  }
parentValue:string='sending this value to child using @input';


  // x:boolean=true;
  // y:Number=2304;
  // // z:string="hello";
  // z='hi ra how are u';
  // a:string=`helllo ${this.z} dskfjds flkdf \n\n kdsjskld`;
  //  list:number[]=[1,2,3,4];
  //  b:string[]=['ds','dsad','dssd']; 
  //  c:[string, number]=['tuple',113];  
  //  d:[string, number,boolean]=['krishna',113,true, 'dsff',123,'dfdsf','dsfdsf',1234567, true,'dsfdsf'];
  // //  e=this.d[3].substr(1);
  // //  enum color{red,green,blue}; we cannot create enum
  // f:any='hi hello';
  // // f='hello hi';
  // g:any[]=[1,2,'helo',3,true];
  // // h:number=g[0];
  
  
  
  ngOnInit() {
//   this.z="hi";
// let k='hello';
  }


}
