import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  tiles: Tile[] = [
    // {text: 'One'},
  ];
  messages = [
    {from: 'Siddhesh', subject: 'Hello', content: 'How are you'},
    {from: 'Siddhesh', subject: 'Hello', content: 'How are you'},
    {from: 'Siddhesh', subject: 'Hello', content: 'How are you'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  contains(i) {
    return Array(i);
  }
}
