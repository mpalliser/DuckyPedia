import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Duck } from '../../duck.model';

@Component({
  selector: 'app-ducky-item',
  templateUrl: './ducky-item.component.html',
  styleUrls: ['./ducky-item.component.css']
})
export class DuckyItemComponent implements OnInit {
  @Input() duck: Duck;
  @Output() duckSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.duckSelected.emit();
  }

}
