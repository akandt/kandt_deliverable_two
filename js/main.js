// Prompt user for vacation type
var vacationType = prompt("What kind of vacation do you want? Musical, Tropical, or Adventurous?");
var vacationAnswer = '';
var destination = '';

if (vacationType === 'Musical') {
    var vacationAnswer = 'musical';
    var destination = 'New Orleans';

} else if (vacationType === 'Tropical') {
    var vacationAnswer = 'tropical';
    var destination = 'a beach in Mexico'

} else if (vacationType === 'Adventurous') {
    var vacationAnswer = 'adventurous';
    var destination = 'whitewater raft in the Grand Canyon'

} else {
    // This needs to rerun the prompt until they give a viable answer
    console.log ('haha loser.');
}


// Prompt user for group size
var groupSize = prompt("What is your group size?");
var groupSizeAnswer = '';
var travelType = '';

if (groupSize <= 2) {
    var groupSizeAnswer = '2';
    var travelType = 'first class flight';

} else if (groupSize <= 5) {
    var groupSizeAnswer = '5';
    var travelType = 'helicopter';

} else if (groupSize >= 6) {
    var groupSizeAnswer = 'six or more';
    var travelType = 'charter flight';

} else {
    // This needs to rerun the prompt until they give a viable answer
    console.log ("Take whatever");
}

// Print out the suggested destination and travel method
let result = (`Since you're a group of ${groupSizeAnswer} going on a ${vacationAnswer} vacation, you should take a ${travelType} to ${destination}.`);

console.log (result);