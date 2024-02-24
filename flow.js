//info given: plants double in number every week;  plants are contained is circular, with a radius of 5 meters;  formula for calculating the area of a circle is PI multiplied by the radius
//area of the space is 78.537
const Pl = 3.1415;
const radius = 5
const startingArea = Pl * radius * radius;
// console.log(startingArea);
// console.log('----------')

//the mathmathical total radius of the starting area is 78.537 sq.ft.
//now will calc the num of plants that will fit in current area, will use space req per plant, startn rad/req space
//only 98 plants can fit in space available
// const requiredSpacePerPlant = 0.8;
// const startingNumberOfPlants =Math.floor(startingArea / requiredSpacePerPlant);
// console.log(startingNumberOfPlants);
// console.log('----------')

//predicting plant groeth in 4 wks
//calc starting numb of plants, by 2, raised to the pow of the numb of wks
//in 4 wek there will be 1568 plants because of their doubling in only 1 wk
// const numberOfWeeks = 1;
// const plantGrowth = startingNumberOfPlants * Math.pow(2, numberOfWeeks);
// console.log(plantGrowth);
// console.log('----------')

// const numberOfWeeks = 4;
// const plantGrowth = startingNumberOfPlants * Math.pow
// console.log(plantGrowth);
// console.log('----------')

//control flow for pruning
//need to compare plant count after 4 wks with 80% of max capacity
//calc max capacity: divide area of circular space by min space req is 0.8 per plant
// const maximumCapacity = Math.floor(startingArea / requiredSpacePerPlant);
// console.log(maximumCapacity);
// console.log('----------')
// 
//already calc plant growth for 4 wks
//if plant count after 4 wks is 80% of max cap, pruning is needed, otherwise no pruining
//way too many plants for space avaliable
// if (plantGrowth > 0.8 * maximumCapacity) {
    // console.log("Pruining is needed to manage plant growth.");
// } else {
    // console.log("No pruining is needed.");
// }
// console.log('----------')

//if plant count at 4 wks is tween 50% and 80% of max cap 
// const plantCountAfter4Weeks = startingNumberOfPlants * Math.pow(2 , numberOfWeeks);
// console.log(plantCountAfter4Weeks);
// console.log('----------')

//not growing at an acceptable rate. No need to monitor
// if (plantCountAfter4Weeks >= 0.5 * maximumCapacity && plantCountAfter4Weeks <= 0.8 * maximumCapacity) {
    // console.log("Plants are growing at an acceptable rate. Monitor their growth.");
// } else{
    // console.log("Plants are not growing at an acceptable rate. No need to monitor their growth.");
// }
// console.log('----------')
// 
//already have count for 4 wks
// if (plantCountAfter4Weeks < 0.5 * maximumCapacity) {
    // console.log("There is room to plant more plants. You can add more plants.");
// } else{
    // console.log("There is no room to plant more plants. The garden is already at or near maximum capacity.");
// }

//same results for 3 wks; area is the same (78.537), 784 plant growth in 3 wks
//pruning is needed to manage growth, not growing at acceptable rate no need to monitor
//no room for more planting at max

// for 2 wks; 78.537 total space ava, 98 plants can fit, pruining is needed, 392 plants in 2 wks, 
//plants are growning at an acceptable reate no need to monitor, no room to plant more plants at max

//for 1 wk; 78.537 sq ft area, 98 plants can fit area, 196 plants after 1 wk
//pruining is need to manage growth, not growing at acceptable rate no need to monitor
//no room to plant more at max capacity

//(fyi) i started with 4 weeks first :( 

//Part 2
//starting with 100 plants, max cap is 80 meters
const requiredSpacePerPlant = 0.8;
const startingNumberOfPlants = 100;
const requiredCapacity = requiredSpacePerPlant * startingNumberOfPlants;
console.log(requiredCapacity);
console.log('----------')

//space req for 100 plants after 10 wks of no pruning: 2.847 sq ft will be needed to expand and for 100 plants 
const requiredArea = requiredCapacity / Pl;
const requiredRadius = Math.sqrt(requiredArea / Pl);
console.log(requiredRadius);
console.log('----------')

//Part3
//this part is confusing, worked it but not sure how i got the output
//can you give feedback please?
try {
    const requiredSpacePerPlant = 0.8;
    const startingNumberOfPlants = 100;
    const requiredCapacity = requiredSpacePerPlant * startingNumberOfPlants;

    const maximumCapacity = Math.floor(startingArea / requiredSpacePerPlant);

    if (requiredCapacity > startingArea) {
        throw new Error("Insufficient space available to hold the provided number of plants.");
    }

    const requiredArea = requiredCapacity / Pl;
    const requiredRadius = Math.sqrt(requiredArea / Pl);

    console.log("The radiusof the expanded garden would be:", requiredRadius);
}   catch(error) {
    console.error(error.message);
}