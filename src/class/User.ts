export class User {
  id?: number
  firstName: string
  lastName: string
  age: number

  constructor(firstName: string, lastName: string, age: number, id?: number) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.age = age,
      this.id = id
  }

  displayUser() {
    return `Prénom: ${this.firstName}, Nom: ${this.lastName}, Age: ${this.age}`
  }

}
