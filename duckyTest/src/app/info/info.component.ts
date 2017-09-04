import { Component, OnInit } from '@angular/core';
import { Duck } from '../duck.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  selectedDuck: Duck;

  constructor() { }

  ngOnInit() {
  }

}
