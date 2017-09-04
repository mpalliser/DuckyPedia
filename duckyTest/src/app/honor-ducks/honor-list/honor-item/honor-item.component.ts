import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Duck } from '../../../duck.model';

@Component({
  selector: 'app-honor-item',
  templateUrl: './honor-item.component.html',
  styleUrls: ['./honor-item.component.css']
})
export class HonorItemComponent implements OnInit {
  @Input() honorDuck: Duck;
  @Output() honorDuckSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.honorDuckSelected.emit();
  }

}
