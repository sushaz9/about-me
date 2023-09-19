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
