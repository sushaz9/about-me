console.log("Hello!");

let intro = prompt("What is your name?");
console.log("The users name is " + intro);
alert("Hello " + intro + ", I'm Susie!");

let wherefrom = prompt("Is Susie from Liverpool? (yes/no)");
wherefrom = wherefrom.toUpperCase();

if (wherefrom === "YES") {
  console.log("Susie is from Liverpool ");
  alert(wherefrom + "! She sure is!");
} else if (wherefrom === "NO") {
  console.log("Wrong!");
  alert("That's wrong! She actually is!");
}

let whatteam = prompt("Does Susie support Liverpool? (yes/no)");
whatteam = whatteam.toUpperCase();

if (whatteam === "YES") {
  console.log("Susie supports Liverpool");
  alert(whatteam + "! She sure does!");
} else if (whatteam === "NO") {
  console.log("Wrong!");
  alert("That's wrong! Obviously she does!");
}

let age = prompt("Is Susie 30 years old? (yes/no)");
age = age.toUpperCase();

if (age === "NO") {
  console.log("Susie is not 30 years old");
  alert(age + "! Not yet anyway!");
} else if (age === "YES") {
  console.log("Wrong!");
  alert("That's wrong! She's 27!");
}

let guitar = prompt("Does Susie play the bass guitar? (yes/no)");
guitar = guitar.toUpperCase();

if (guitar === "YES") {
  console.log("Susie plays the bass guitar ");
  alert(guitar + "! She sure does!");
} else if (guitar === "NO") {
  console.log("Wrong!");
  alert("That's wrong! She actually does!");
}

let simpsons = prompt("Does Susie watch The Simpsons everyday? (yes/no)");
simpsons = simpsons.toUpperCase();

if (simpsons === "YES") {
  console.log("Susie watches The Simpsons every day");
  alert(simpsons + "! Without fail");
} else if (simpsons === "NO") {
  console.log("Wrong!");
  alert("You're dead wrong, she absolutely does");
}

let ans = prompt(
  "Where does Susie rank Marge Simpson in her list of Top 10 TV Characters? (1-10)"
);
let countguess = 0;
while (ans !== "3" && countguess < 3) {
  countguess = countguess + 1;
  ans = prompt("Incorrect! Guess " + countguess.toString() + "/4");
}

if (ans === "3") {
  console.log("The answer is 3");
  alert("Correct! She's #3!");
} else {
  alert("You have run out of guesses. The answer is #3");
}

let tv = ["succession", "friends", "red dwarf"];
let tvAns = prompt(
  "Susie's favourite characters are in which TV shows?"
).toLowerCase();

for (let i = 0; i < tv.length; i++) {
  if (tvAns === tv[i]) {
    alert("Correct!");
  }
}

alert("You got " + userPoints + "/6 questions correct");
