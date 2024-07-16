import { Op } from 'sequelize';
import { Animal, Human } from './model.js';


const people = await Human.findAll({
    include: {
        model : Animal
    }

}) 

people.forEach((person) => {
    console.log(person.fname, person.lname)
    person.animals.forEach((animal) => {
        console.log("- " + animal.name + ", " + animal.species)
    })
})
