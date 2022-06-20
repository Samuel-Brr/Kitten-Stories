import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[] = []
  userKittens: Kitten[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onCreateKitten($event: Kitten){
    this.kittens.push($event)
  }

  adoptKitten(kitten: Kitten){
    this.userKittens.push(kitten)
    this.deleteKittenFromKittens(kitten)
  }

  deleteKittenFromKittens(kitten: Kitten){
    const newKittens = [...this.kittens]

    _.remove(newKittens, (element: Kitten) => element.getId === kitten.getId)

    this.kittens = newKittens
  }
}
