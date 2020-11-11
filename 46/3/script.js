const animal = {
    species: 'Apa' ,
    name: 'hedvig' ,
    age: 6
}

function happyBirhtday(a) {
    animal.age += 1
    return animal
}

console.log(animal)
console.log(happyBirhtday(animal))