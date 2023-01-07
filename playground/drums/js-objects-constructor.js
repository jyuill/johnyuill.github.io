
// create object
var houseKeeper_01 = {
    yrsExp: 12,
    name: "Jane",
    cleanTasks: ["bathroom","beds","gym"]
}
console.log("My name is "+houseKeeper_01.name+" and I clean "+houseKeeper_01.cleanTasks);

// Constructor function 
// create function to compile different instances of any object
// - use title case for name
function HouseKeeper (yrsExp, name, cleanTasks){
    this.yrsExp = yrsExp;
    this.name = name;
    this.cleanTasks = cleanTasks;
}
// initialize new object with constructor function
var houseKeeper_02 = new HouseKeeper(8,"Abbie",["beds","bath","beyond"]);
// print using new variable values
console.log("My name is "+houseKeeper_02.name+" and I clean "+houseKeeper_02.cleanTasks);

// add method to constructor function
function HouseKeeper2 (yrsExp, name, cleanTasks){
    this.yrsExp = yrsExp;
    this.name = name;
    this.cleanTasks = cleanTasks;
    this.clean = function(){ // function serves as method
        console.log("Caution! Cleaning in progress...");
    }
}
var houseKeeper_03 = new HouseKeeper2(4,"Kris",["kitchen"]);
houseKeeper_03.clean(); // run method from within object
