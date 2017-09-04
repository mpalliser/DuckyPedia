import {Component, Input, OnInit} from '@angular/core';
import { Duck } from '../../duck.model';

@Component({
  selector: 'app-honor-detail',
  templateUrl: './honor-detail.component.html',
  styleUrls: ['./honor-detail.component.css']
})
export class HonorDetailComponent implements OnInit {
  @Input() honorDuck: Duck;
  constructor() { }

  ngOnInit() {
  }

}
