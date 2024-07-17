import { Op } from 'sequelize';
import { Animal, Human } from './model.js';
const findSpecies = 'dog'

export async function getHumansByAnimalSpecies(species) {
    const animals = await Animal.findAll({
        include: {
            model : Human
        },
        where : {species : findSpecies}
    }) 
    const speciesOwners = new Set()
    animals.forEach(async (animal) => {

        let owner = await Human.findByPk(animal.humanId)
        let ownerName = owner.fname + " " + owner.lname
        speciesOwners.add(ownerName)
        //console.log(animal.name, "the", animal.species, "owned by", ownerName)
    })
    
   return(speciesOwners)
}

console.log(getHumansByAnimalSpecies(findSpecies))