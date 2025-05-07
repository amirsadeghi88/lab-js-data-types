/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tonguetwister = `${s1} ${s2} ${s3} ${s4} ${s5}`;
// Print out the concatenated string

console.log(tonguetwister);
console.log(tonguetwister.length); // Print the length of the string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1Last = part1.slice(0,-1) + part1[part1.length -1].toUpperCase();
const part2Last = part2.slice(0, -1) + part2[part2.length -1].toUpperCase();
//const concat = `${part1Last} ${part2Last}`;
console.log(part1Last + " " + part2Last); 
// Print the cameLtaiL-formatted string
const cameLtaiL = `${part1Last}${part2Last}`;
console.log(cameLtaiL); 
console.log(cameLtaiL.length); // Print the length of the string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15;
console.log(tip); 


 // Print out the total amount (bill + tip)
 const totalAmount = `${billTotal + tip}`;

// Print out the tipAmount

console.log(totalAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randMax= 10;
let randMin= 1;
const rand= Math.random(randMin, randMax); // This will generate a random number between 0 and 1


// Print the generated random number
console.log(rand);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false
const expression2 = a || b;
true
const expression3 = !a && b;
false
const expression4 = !(a && b);
true
const expression5 = !a || !b;
true
const expression6 = !(a || b);
false
const expression7 = a && a;
true