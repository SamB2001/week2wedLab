//creating an object with brackets
//accessing value in object

let person = {
    firstName: 'Sam',
    lastName: 'Bischoff',
    age: 21,
    favoriteBev: 'water'
}

let samsRealAge = person.age
let samsRealAgeCopy = person['age']

// console.log(samsRealAge)
// console.log(samsRealAgeCopy)

//destructuring

let meal ={
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr.pepper',
}

//this is the same as : const dessert = meal.dessert
// const drink = meal.drink
const {dessert, drink: bestDrinkOfAllTime} = meal

// console.log(dessert)
// console.log(bestDrinkOfAllTime)


//looping through an object

for (key in person){
    // console.log(`My ${key} is ${person[key]}`)
    // console.log(person[key])
}

// Adding properties (aka key/value pairs) to an object

person.job = "Devmountain student"
person['pets'] = ['snake', 'dog']
// let pet1 = person.pets[0]
// let pet1Copy = person['pets'][0]

// console.log(pet1)
// console.log(pet1Copy)

// console.log(person)

//Deleting properties

delete person['pets']
// console.log(person)

let teams = {
    team1: ['kyle', 'jared', 'joely', 'egha'],
    team2: ['bob', 'tommy'],
    team3: ['sam'],
    team4: ['samantha'],
}

//team 4 lost, kill them:
delete teams.team4

// console.log(teams)

// classes

class Pokemon {
    constructor(name, types, weakness,level, hp, attack){
        this.name = name
        this.types = types
        this.weakness = weakness
        this.level = level
        this.hp = hp
        this.attack = attack
        // sayName() {
        //     console.log(this.name + '!')
        // }
    }
}

let snivy = new Pokemon(
    'Snivy',
    ['grass'],
    'fire',
    5,
    18,
    10

)

let arceusTyphlosion = new Pokemon(
    'typhlosion',
    ['fire', 'ghost'],
    'water',
    36,
    119,
    85

    )
    
    // console.log(snivy)
    // console.log(`snivy's level is ${snivy.level}`)
    // console.log(arceusTyphlosion)
    // console.log(`Arceus typhlosion level is ${arceusTyphlosion.level}`)
    
// arceusTyphlosion.sayName()

//extending a class 

class Animal {
    constructor(name, weight, height){
        this.name = name
        this.weight = weight
        this.height = height
    }

    printAnimalName(){
        console.log(this.name)
    }
}

class Bird extends Animal {
    constructor(name, weight, height, wingspanInInches, flightSpeedInMph) {
        super(name, weight, height)
        this.wingspanInInches = wingspanInInches
        this.flightSpeedInMph = flightSpeedInMph
    }

    birdShriek() {
        console.log('keyaaah!')
    }

    increaseFlightSpeed(speedIncrease) {
        this.flightSpeedInMph += speedIncrease
    }
}

// let animal1 = new Animal('oyster', 0.3, 2)
// console.log(animal1)
// animal1.printAnimalName()

let bird1 = new Bird('big bird', 350, 94, 60, 0)
console.log(bird1)
bird1.birdShriek()
bird1.increaseFlightSpeed(10)
console.log(bird1)

