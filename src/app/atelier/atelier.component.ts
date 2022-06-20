import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.scss']
})
export class AtelierComponent implements OnInit {

  premium: boolean = true;
  films: string[] = ['toto', 'titi', 'tata']
  user: string = 'Sam'

  constructor() { }

  ngOnInit(): void {
  }

}
