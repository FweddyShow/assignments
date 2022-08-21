// ### **Project Requirements:**

// 1. Console must greet player with a fun message X
// 2. Console must ask for the player's name and store it X
// 3. Walking:
// - The console will ask the user to enter a "w" to walk x
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)x
// - Use a while loop to control this flow. - done
// 1. If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names) - classes added
// - The user can decide to attack or run - complete class or cheat
// - If attacking, a random amount of damage will be dealt between a min and max - x
// - If running, there will be a 50% chance of escaping - cheat
// - After the player attacks or runs the enemy attacks back for a random damage amount -x
// - The player and enemy will attack each other in a loop until one of them passes out or dies. -x 
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. - x
// - If the enemy kills the player the console prints a cool death message and the game ends - x
// 1. Inventory
// - When the player kills enemies, they are awarded with items x - in the form of Grade Points
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventoryx


const input = require("readline-sync");

console.log("Welcome to the learning terminal, we are excited you have chosen the institue arcanium for your learning!")
const name = input.question("Please enter your name to log in: ");
console.log(`Log-in confirmed. ${name}! Keep in mind each class will take up a certain amount of your stamina to complete, but will reward you with passion. When you run out of stamina you are free to head home, with a GPA given at the end of your day.`)

class Player {
    constructor(name, stamina, gradePoint,) {
    this.name = name;
    this.stamina = stamina;
    this.gradePoint = gradePoint;
    this.inventory= "Lunch Money"
    }
}
var hero = new Player(name, 100, 0)

//const selection = require("readline-sync")
//const course = selection.question("Press 1 for alchemy, 2 for smithing, and 3 for potions 101: ")
//console.log(course)

//class Character(

//constructor(config)

//)
//class student {
    //constructor(name, stamina, passion, inventory){
   //     this.name = 
   // }
//}

class AssignmentGiven {
    constructor(name, stamina, gradePoint, requirement) {
        this.name = name
        this.stamina = stamina;
        this.gradePoint = gradePoint;
        this.requirement = requirement;
    }
}

const potion = new AssignmentGiven("Potions Class", 25, 25, "brewing a transmogrification potion")
const smithing = new AssignmentGiven("Smithing Class", 50, 100, "a sword project")
const alchemy = new AssignmentGiven("Alchemy Class", 10, 10, "removing an abjuration curse")
var assignments = [potion, smithing, alchemy]
//var assignment = ""

//var smithing = {
 //   stamina: 20,
 //   passion: 100,
 //   requirement: "You are given a take home sword project"
//}
//var potion = {
  //  stamina: 15,
  //  passion: 25,
  //  requirement: "You must brew a transmogrification potion"
//}
//var alchemy = {
   // stamin: 10,
   // passion: 25,
   // requirement: "Remove the abjuration curse on a magical spear"
//} 
//var assignmentGiven = [alchemy, potion, smithing]
//var assignments = ""

function walk() {
    const random = Math.floor(Math.random()*4)
    if(random === 0) {
        console.log("You arrive at class on time, you are given mostly busy work to pass the time.");
        hero.gradePoint = hero.gradePoint + 10;
        return;
    }else if (random === 1) {
        assignments = smithing
    }else if (random === 2) {
        assignments = potion
    }else if (random === 3) {
        assignments = alchemy
    }
    education()
    
}
function education() {
    console.log("You enter", assignments.name, "class and are tasked with", assignments.requirement, "this class will take", assignments.stamina, "stamina, and will provide", assignments.gradePoint, "grade points.",)
    const tackle = input.question("How will you handle this class? To meet the stamina requirement type [Full], to use less stamina (random amount) but also gain a random number of grade points type [Slack], for a 50/50 shot of no loss of stamina but immediate failure if caught, type [Cheat]: ")
    while(hero.stamina > 0) {
        if(tackle === 'Full') {
            console.log("You complete the class, you feel you learned a lot, but are definitely more tired.")
            hero.gradePoint = hero.gradePoint + assignments.gradePoint
            hero.stamina = hero.stamina - assignments.stamina
            break;
        } else if(tackle === 'Cheat') {
            const cheat = Math.floor(Math.random()*2)
            if(cheat === 0) {
                console.log("You have been caught cheating and are sent home for the day, Game Over!");
                hero.stamina = 0;}
            else if(cheat === 1) {
                console.log("You got away with it, to the victor go the spoils");
                hero.gradePoint = hero.gradePoint + assignments.gradePoint;
                break;
            }
            }else if(tackle === 'Slack'){
                console.log("You slack off a little, and don't pay a ton of attention, your professor notices but doesn't say anything.")
                hero.stamina = hero.stamina - assignments.stamina / Math.floor(Math.random()* (5 - 2) + 2);
                hero.gradePoint = hero.gradePoint + assignments.gradePoint / Math.floor(Math.random()* (5 - 2) + 2);
                break;
            }
    }
}
    //var grade = hero.gradePoint
        //if (hero.gradePoint === 0){
       // var grades = "F"}
       //else if(hero.gradePoint > 30){
        //    var grades = "D"
        //}else if (hero.gradePoint > 60){
        //    var grades = "C"
        //}else if (hero.gradePoint > 90){
        //    var grades = "B"
        //}else if (hero.gradePoint > 120){
        //    var grades = "A"
       //}else if (hero.gradePoint > 150){
        //    var grades = "A+"
       // }

while(hero.stamina > 0) {
    const entry = input.keyIn("Are you ready to walk to class? w to walk, p to view inventory, q to quit: " , {limit: 'wnpq'})
        
    if(entry === 'w'){
        walk()
    }else if (entry === 'q'){
        console.log("You forgot your homework. Good try though!");
        hero.stamina = 0;
        return;
    }else if (entry === 'p'){
        console.log("Student Name:", name, "| Stamina:", hero.stamina,"| Current Grade Points:", hero.gradePoint,"| Inventory:", hero.inventory)
}if (hero.stamina <= 0 ) {
    console.log("You end your day and head back home, nice job! You earned", hero.gradePoint, "Grade Points and are assigned", assignments.name, "homework. See you tomorrow!")
}
}