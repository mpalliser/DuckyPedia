import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Duck} from '../../duck.model';

@Component({
  selector: 'app-honor-list',
  templateUrl: './honor-list.component.html',
  styleUrls: ['./honor-list.component.css']
})
export class HonorListComponent implements OnInit {
  @Output() honorDuckWasSelected = new EventEmitter<Duck>();
  loremIpsum = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha ' +
    'sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. ' +
    'persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera ' +
    'que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó ' +
    'como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue ' +
    'popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de ' +
    'Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el ' +
    'cual incluye versiones de Lorem Ipsum.';
  honorDucks: Duck[] = [
    new Duck('David Gelpi',
      'DUCK MASTER,Deivid, el Gelpi, aquel que nos grita, Odin',
      'https://i.gyazo.com/85ddf189123f5d438bd10f11f73fcab7.png',
      this.loremIpsum),
    new Duck('Miquel Urbina',
      'UrbinaPro, El que recomienda formatear, Mr patinete,xX_SkateMaster360_Xx',
      'https://i.gyazo.com/a2ef3e44b7d9b3ee12ddb03bbe84ae6e.png',
      this.loremIpsum),
    new Duck('Alex Espinola',
      'Espinola, Juanolas, Archienemigo de Joselito, Eye candy de pili',
      'https://i.gyazo.com/20ef98b18d8954c46ff9522776f9f414.png',
      this.loremIpsum)
    ]
  constructor() { }

  ngOnInit() {
  }

  onDuckSelected(duck: Duck) {
    this.honorDuckWasSelected.emit(duck);
  }

}
