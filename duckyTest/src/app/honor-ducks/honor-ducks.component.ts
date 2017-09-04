import { Component, OnInit } from '@angular/core';
import { Duck } from '../duck.model';

@Component({
  selector: 'app-honor-ducks',
  templateUrl: './honor-ducks.component.html',
  styleUrls: ['./honor-ducks.component.css']
})
export class HonorDucksComponent implements OnInit {
  selectedHonorDuck: Duck;

  constructor() { }

  ngOnInit() {
  }

}
