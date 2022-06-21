export class Kitten{


  static kittens: Kitten[] = []
  static kittenCounter: number = 0
  private id: number;
  private _isInfoDisplayed: boolean = false

  constructor(
    private name: string,
    private race: string,
    private birthdate: string,
    private image: string,
  ){
    Kitten.kittens.push(this)
    Kitten.kittenCounter ++
    this.id = Kitten.kittenCounter
  }

  adoptKitten(){
  }

  get getName(){
    return this.name
  }

  get getRace(){
    return this.race
  }

  get getBirthdate(){
    return this.birthdate
  }

  get getImage(){
    return this.image
  }

  get getId(){
    return this.id
  }

  set setRace(race: string){
    this.race = race
  }

  set setBirthdate(birthdate: string){
    this.birthdate = birthdate
  }

  set setImage(image: string){
    this.image = image
  }

  set setName(name: string){
    this.name = name
  }

  public get isInfoDisplayed(): boolean {
    return this._isInfoDisplayed;
  }
  public set isInfoDisplayed(value: boolean) {
    this._isInfoDisplayed = value;
  }

}
