
// const country = 'Serbia';
// console.log(country);
// const continent = 'Europe';

// const finlandPopulation = 6;

// const averagePopulation = 33;

// const population = 7;
// console.log(population/2);

// console.log(population);

// console.log(population > 6);

// const average = (population < 33);

// console.log(average);

// console.log(average > population);
// const language = 'serbian';

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language

// console.log(description);


// let isIsland = false;
// isIsland = true;
// console.log(isIsland);

// const language = 'serbian';
// console.log(language);






//MATH OPERATORS
// const now = 2022;

// const ageDjole = now-1984;
// const ageMarko = now-1992;

// console.log(ageDjole, ageMarko);

// console.log(ageDjole * 2, ageMarko/10, 2**5);

// const ime = 'Djordje';
// const prezime = 'Vasilevski';

// console.log(ime + ' ' + prezime)


//ASSIGNMENT OPERATORS
// let x = 10 + 5;
// x += 10; // += means x = x + 5
// x /= 4 //  /= neabs x = x /4

// x++ // means x = x + 1
// x--
// x--

// console.log(x)

//COMPARISON OPERATORS (We use them to produce boolean values)

// console.log(ageDjole > ageMarko) // >, <, >=, <=

// const isFullAge = ageMarko >= 18

// console.log(isFullAge)

// console.log(now - 1984 > now - 1992);


// const now = 2022;

// const ageDjole = now-1995;
// const ageMarko = now-1784;

// const averageAge = (ageDjole + ageMarko) / 2

// console.log(ageDjole, ageMarko, averageAge);





// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.

// const markWeight = 78;

// const markHeight = 1.69;

// const johnWeight = 92;

// const johnHeight = 1.95;

// const markBmi = markWeight / markHeight ** 2 ;

// const johnBmi = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBmi > johnBmi;

// console.log(markBmi, johnBmi);

// console.log(markHigherBMI);

// const markMass = 95;

// const markIsTall = 1.88;

// const johnMass = 85;

// const johnIsTall = 1.76;

// const markBMI = markMass / markIsTall ** 2;

// const johnBMI = johnMass / (johnIsTall * johnIsTall);

// const markHasHigherBmi = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHasHigherBmi);



// const firstName = "Djole";

// const job = 'web developer';

// const birthYear = 1995;

// const year = 2022;

// const djole = "I'm "+ firstName + ", " + "a " + job + ", " + "and i was born in " + birthYear 

// console.log(djole);

// const djoleNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}`

// console.log(djoleNew);

// console.log (`just a regular string ${job}`)

// console.log ('string with \n\
// multiple \n\
// lines')

// console.log (`string with
// multiple
// lines`)

// const country = 'Serbia';
// console.log(country);
// const continent = 'Europe';

// const finlandPopulation = 6;

// const averagePopulation = 33;


// ASSIGNMENT VEZBA (SVE!!!)

// const country = 'Serbia';
// console.log(country);
// const continent = 'Europe';

// const finlandPopulation = 6;

// const averagePopulation = 33;

// const population = 130;

// console.log(population/2);

// console.log(population);

// console.log(population > 6);

// const average = (population < 33);

// console.log(average);

// console.log(average > population);
// const language = 'serbian';

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language

// const descriptionLiteral = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// console.log(description);

// console.log(descriptionLiteral)

// const country = 'England';
// const population = 33;
// const isIsland = false;
// const language = 'english';

// if(language === 'english' && population < 50 && !isIsland ) {
//     console.log (`You should live in ${country} :D`)
// } else {
//     console.log (`${country} does not meet your criteria :()`)
// }



// let numNeughbours = Number(prompt('How many neighbour cointries does your country have?'))
// if (numNeughbours === 1) {
//     console.log('Only one border')
// } else if (numNeughbours > 1) {
//     console.log('More than one border')
// } else {
//     console.log('No border')
// }
// WE USE === BECAUSE WE DEAL ONLY WITH NUMBERS. IF WE USE == BUGS CAN HAPPEN.

// if(population > 33) {
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${averagePopulation - population} milion below average`)
// }


//NASLOV: Taking decisions (if else statements)

// const age = 19;

// if (age >= 20) {
//     console.log('Marko moze da vozi 🚗')
    
// } else {
//     const yearsLeft = 20 - age;
//     console.log(`${yearsLeft} years left`)
// }

// const birthYear = 2060;

// let century;

// if(birthYear <= 1999) {
//     century = 20;
// } else if (birthYear <= 2099) {
//     century = 21
// } else if (birthYear >= 2100) {
//     century = 22
// }

// console.log(century)

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

// const markWeight = 78;

// const markHeight = 1.69;

// const johnWeight = 92;

// const johnHeight = 1.95;

// const markBmi = markWeight / markHeight ** 2 ;

// const johnBmi = johnWeight / (johnHeight * johnHeight);

// const markHigherBMI = markBmi > johnBmi;

// console.log(markBmi, johnBmi);

// console.log(markHigherBMI);

// const markMass = 95;

// const markIsTall = 1.88;

// const johnMass = 85;

// const johnIsTall = 1.76;

// const markBMI = markMass / markIsTall ** 2;

// const johnBMI = johnMass / (johnIsTall * johnIsTall);

// const markHasHigherBmi = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHasHigherBmi);

// if (markBMI > johnBMI) {
//     console.log(`mark BMI ${markBMI} is higher than john BMI ${johnBMI}`);
// } else {
//     console.log(`john BMI ${johnBMI} is higher than mark BMI ${markBMI}`);
// }

// if (markBmi > johnBmi) {
//     console.log(`mark BMI (${markBmi}) is higher than john BMI (${johnBmi})`);
// } else {
//     console.log(`john BMI (${johnBmi}) is higher than mark BMI (${markBmi})`);
// }

//NASLOV: Conversion and coersion

//Type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Djordje'))
// console.log(typeof NaN)

// console.log(String(23), 23);

//Type coersion
// console.log('I am ' + 23 + ' years old')

// console.log('I am ' + '23' + ' years old')

//NASLOV: Trithy and Falsy

//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Djole'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 100;
// if(money) {
//     console.log("Don't spend it all")
// } else {
//     console.log("You should get a job!")
// }

// let height = 0;
// if(height) {
//     console.log("YAY! Height is defined")
// } else {
//     console.log('Height is undefined')
// }

// const age = '18';
// if(age === 18) console.log('You just became an adult')

// if(age == 18) console.log('You just became an adult')

// console.log('18' == 18) 
// === is a strict value operator, it only return true if both values are exactly the same
// == is a loose equality operator, does type coersion (sting 18 will be converted to a number and is equal to number 18) (AVOID!!!)


// const favourite = Number(prompt("What's your favourite number?"))

// console.log(favourite)
// console.log(typeof favourite)

// if (favourite === 9) {
//     console.log('Cool 9 is an amazing number')
// } else if (favourite === 7) {
//     console.log ('7 is also a cool number')
// } else if (favourite === 10) {
//     console.log ('10 is also a cool number')
// } else {
//     console.log ('Number is not 9, 7, 10')
// }


// if(favourite !== 9) {
//     console.log('Why not 9?')
// }

// console.log(5 + 6 + '4' + 9 - 4 - 2);


//NASLOV: LOGICAL OPERATORS

// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if(hasDriversLicence && hasGoodVision) {
//     console.log('Djole is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

// const isTired = false;

// console.log(hasDriversLicence && hasGoodVision && isTired);

// if(hasDriversLicence && hasGoodVision && !isTired) {
//     console.log('Djole is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }


// && - AND OPERATOR
// || - OR OPERATOR


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 

// const dolphinsScore = (96 + 108 + 89) / 3; 
// console.log(dolphinsScore);

// const koalasScore = (88+91+110) / 3;
// console.log(koalasScore);

// if(dolphinsScore > koalasScore) {
//     console.log('Dolphins win');
// } else if(koalasScore > dolphinsScore) {
//     console.log('Koalas win');
// } else {
//     console.log('Draw')
// }

// const dolphinsScore1 = (97 + 112 + 50) / 3; 
// console.log(dolphinsScore1);

// const koalasScore1 = (109 + 95 + 50) / 3;
// console.log(koalasScore1);

// if(dolphinsScore1 > koalasScore1 && dolphinsScore1 >=100 ) {
//     console.log('Dolphins win');
// } else if(koalasScore1 > dolphinsScore1 && koalasScore1 >=100) {
//     console.log('Koalas win');
// } else if(koalasScore1 === dolphinsScore1 && koalasScore1 >=100 && dolphinsScore1 >=100) {
//     console.log('Draw')
// } else {
//     console.log('No one wins the trophy')
// }


//NASLOV: The switch statement
// const day = 'monday';

// switch(day) {
//     case 'monday' :  // day  === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday' :
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday' :
//     case 'thursday' :
//         console.log('Write code examples')
//         break;
//     case 'friday' :
//         console.log('Record videos')
//         break;
//     case 'saturday' :
//     case 'sunday' :
//         console.log('Enjoy the weekend')
//         break;

//         default :
//         console.log('Not a valid day!')
// }

//ISTO KAO OVO GORE SAMO SA IF/ELSE
// const day = 'tuesday';

// if (day === 'monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples')
// } else if (day === 'friday') {
//     console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend')
// } else {
//     console.log('Not a valid day')
// }

// const language = 'srpski'

// switch(language) {
//     case 'chinese' : case 'mandarin' :
//         console.log('MOST number of native speakers!')
//         break;
//     case 'spanish' :
//         console.log('2nd place in number of native speakers')
//         break;
//     case 'english' :
//         console.log('3rd place')
//         break;
//     case 'hindi' :
//         console.log('Number 4')
//         break;
//     case 'arabic' :
//         console.log('5th most spoken language')
//         break;
//     default :
//         console.log('Great language too :D')
// }

//NASLOV: Statements and expressions

//3+4
//1991
//true &&  false && !false  
//Expressions produces value (like words in sentence)

// if (23>10) {
//     const str = '23 is bigger'; // But this string is an expression
// }

// console.log(`Im ${2037-1991} years old.`) // We log an expressions, not statements
//Statement doesent produce value, it preforms some actions (like sentence)


// const age = 25;

// const drink = age >= 18 ? 'Wine 🍷' : 'Water 🥛';

// console.log(drink)

// let drink2;

// if(age >= 18) {
//     drink2 = 'Wine 🍷';
// } else {
//     drink2 = 'Water 🥛';
// }

// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 🥛'}`)

// '?' ternary operator - Has 3 parts (condition, if part and else part)
//Operators always produce a value, so an operator is an expression.
//So if we have a value we can sign that value to a variable.
//Now we can conditionally declare variables




// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 



// const bill = 200

// const tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)



