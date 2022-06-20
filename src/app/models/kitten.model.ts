export class Kitten{

  static kittens: Kitten[] = []
  static kittenCounter: number = 0
  private id: number;

  constructor(
    private name: string,
    private race: string,
    private birthdate: number,
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

  set setBirthdate(birthdate: number){
    this.birthdate = birthdate
  }

  set setImage(image: string){
    this.image = image
  }

  set setName(name: string){
    this.name = name
  }

}
