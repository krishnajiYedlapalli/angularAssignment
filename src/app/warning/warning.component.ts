import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { }
  
   warningMsg:string='this is warning msg from warning component using template refernce';

   @Input() inputVal:string;

  ngOnInit() {
  }

}
