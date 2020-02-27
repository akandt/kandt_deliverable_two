// Prompt user for vacation type
let vacationType = prompt("What kind of vacation do you want? Musical, Tropical, or Adventurous?");
let destination = '';

if (vacationType.toLowerCase() === 'musical') {
    destination = 'New Orleans';
} else if (vacationType.toLowerCase() === 'tropical') {
    destination = 'a beach in Mexico';
} else if (vacationType.toLowerCase() === 'adventurous') {
    destination = 'whitewater raft in the Grand Canyon';
}


// Prompt user for group size
let groupSize = prompt("What is your group size?");
let travelType = '';

if (groupSize <= 2) {
    travelType = 'first class flight';
} else if (groupSize <= 5) {
    travelType = 'helicopter';
} else if (groupSize >= 6) {
    travelType = 'charter flight';
}

// Print out the suggested destination and travel method
let result = `Since you're a group of ${groupSize} going on a ${vacationType.toLowerCase()} vacation, you should take a ${travelType} to ${destination}.`;

console.log(result);