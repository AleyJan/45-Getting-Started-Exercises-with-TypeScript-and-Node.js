/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these 
animals in a list, and then use a for loop to print out the name of each animal.*/

let animals=[`lion`,`turle`,`azebra`];
for(let i=0; i<animals.length; i++){
console.log(animals[i]);

/* Modify your program to print a statement about each animal, such as A dog would make a great pet. Add a line at
 the end of your program stating what these animals have in common. You could print a sentence such as Any of these
 animals would make a great pet!*/
if(animals[i]==`turle`){
    console.log(`white hair turtle is rare`);
}
else if(animals[i]==`zebra`){
console.log(`zebra has white strips`);
}
else
{
    console.log(`lion rule over jungle`);
}
}
console.log(`they all have four legs, and lion would make a great pet!`);
