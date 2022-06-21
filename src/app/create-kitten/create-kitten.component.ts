import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  @Output()
  createKitten: EventEmitter<any> = new EventEmitter()

  createKittenForm = this.fb.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['', Validators.required],
    image: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const name = this.getName.value!
    const race = this.getRace.value!
    const birthdate = this.getBirthdate.value!
    const image = this.getImage.value!

    let newKitten = new Kitten(name, race, birthdate, image)
    this.createKitten.emit(newKitten)
  }

  get getName(){
    return this.createKittenForm.controls.name
  }
  get getRace(){
    return this.createKittenForm.controls.race
  }
  get getBirthdate(){
    return this.createKittenForm.controls.birthdate
  }
  get getImage(){
    return this.createKittenForm.controls.image
  }
}
