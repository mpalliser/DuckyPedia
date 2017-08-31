import { Component, Input, OnInit } from '@angular/core';
import { Duck } from '../duck.model';

@Component({
  selector: 'app-ducky-detail',
  templateUrl: './ducky-detail.component.html',
  styleUrls: ['./ducky-detail.component.css']
})
export class DuckyDetailComponent implements OnInit {
  @Input() duck: Duck;

  constructor() { }

  ngOnInit() {
  }

}
