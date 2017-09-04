import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Duck} from '../../duck.model';

@Component({
  selector: 'app-honor-list',
  templateUrl: './honor-list.component.html',
  styleUrls: ['./honor-list.component.css']
})
export class HonorListComponent implements OnInit {
  @Output() honorDuckWasSelected = new EventEmitter<Duck>();
  honorDucks: Duck[] = [
    new Duck('David Gelpi',
      'DUCK MASTER,Deivid, el Gelpi, aquel que nos grita, Odin',
      'https://i.gyazo.com/85ddf189123f5d438bd10f11f73fcab7.png',
      'asdf'),
    new Duck('Miquel Urbina',
      'UrbinaPro, El que recomienda formatear, Mr patinete,xX_SkateMaster360_Xx',
      'https://files.slack.com/files-pri/T2F7TQ7AP-F6X16HWSG/whatsapp_image_2017-02-24_at_17.10.24.jpeg',
      'asdf'),
    new Duck('Alex Espinola',
      'Espinola, Juanolas, Archienemigo de Joselito, Eye candy de pili',
      'https://i.gyazo.com/20ef98b18d8954c46ff9522776f9f414.png',
      'asdf')
    ]
  constructor() { }

  ngOnInit() {
  }

  onDuckSelected(duck: Duck) {
    this.honorDuckWasSelected.emit(duck);
  }

}
