var name =  prompt('What is your name?');
var nameLength = name.length;
var firstChar = name.slice(0,1);
firstChar = firstChar.toUpperCase();
var remainingchar = name.slice(1,nameLength);
remainingchar = remainingchar.toLowerCase();
 var refinedName = firstChar + remainingchar; 

alert('Hello' + " " + refinedName);