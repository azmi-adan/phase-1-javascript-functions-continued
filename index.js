// code your solution here

// Function to plan activities for Saturday
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Function to plan work for Monday
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// Function to create a wrapper function for adjectives
function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Example usage:
console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun('hike')); // Output: "This Saturday, I want to hike!"

console.log(mondayWork()); // Output: "This Monday, I will go to the office."
console.log(mondayWork('work from home')); // Output: "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"
console.log(wrapAdjective("%")("a diligent learner")); // Output: "You are %a diligent learner%!"
