import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Duck } from '../duck.model';

@Component({
  selector: 'app-ducky-list',
  templateUrl: './ducky-list.component.html',
  styleUrls: ['./ducky-list.component.css']
})
export class DuckyListComponent implements OnInit {
  @Output() duckWasSelected = new EventEmitter<Duck>();
  ducks: Duck[] = [
    new Duck('Alberto Garcia', 'Menecorí, GATO, Huele regular.',
      'https://files.slack.com/files-pri/T2F7TQ7AP-F6VMV6C2G/nyanbertobig.png',
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'),
    new Duck('Jesus Martinez', 'JysusJebusGsusJepúsLlesusLlésusYisusJybus.',
      'https://files.slack.com/files-pri/T2F7TQ7AP-F6ERG145D/fotoperfil-min.jpg',
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'),
    new Duck('Guillermo Cirer',
      'Thor, puto amo se las folla todas.',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODM4ZDQzYzQtZmEzOS00Y2Q4LThhYTItM2MzZTk5N2QwNzgyXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._CR546,155,638,638_UX402_UY402._SY201_SX201_AL_.jpg',
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.')
  ];

  constructor() { }

  ngOnInit() {
  }

  onDuckSelected(duck: Duck) {
    this.duckWasSelected.emit(duck);
  }
}
