import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

@Input() inputVal:string;
successValue:string='success property is using in warning by @input';

  ngOnInit() {
  }

}
