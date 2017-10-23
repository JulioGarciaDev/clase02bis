function Persona(name,, lastname) {
    this.name = name;
    this.lastname = lastname;

    this.getFullname = () => this.name + '' + this.lastname
    // arrow function para una sola linea.
}

let persona = new Persona('pepito', 'rodriguez');

console.log(persona.getFullname());