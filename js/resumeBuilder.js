// $("#main").append("Ce BIAN");
// $("#main").append((299792458*100)/1000000000 );

// var email = "cbbc1983@yahoo.fr";
// var new_email = email.replace("yahoo", "gmail");

// console.log(email);
// console.log(new_email);

// var awesomeThoughts = "My name is Ce BIAN and I an AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

var formattedName = "Ce BIAN";
var formattedRole = "Consultant Decisionnel";

var HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
var HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

// $("#header").append(HTMLheaderName);
// $("#header").append(HTMLheaderRole);

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

// === String: Function pour le type String
/* var s = "audacity";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    // var s_tmp = s.slice(1);
    // var s = s_tmp[0].toUpperCase() + s_tmp.slice(1);
	var s = s[1].toUpperCase() + s.slice(2);
    return s;
};
// Did your code work? The line below will tell you!
console.log(udacityizer(s)); */

// === Array: Manipulation d'une liste
var sampleArray = [0,0,7];
var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
	// newArray = _array.slice(0);
    // newArray = newArray.concat(sampleArray[2]+1);
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber+1);
 
    // Don't delete this line!
    return newArray;
};
// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";

// === String + Array: Combinaison deux types de fonction
/* function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var firstName = finalName.slice(0,6).toLowerCase();
    firstName = firstName[0].toUpperCase()+firstName.slice(1);
    finalName = firstName+" "+finalName.slice(7).toUpperCase();
    // Don't delete this line!
    return finalName;
};
// Did your code work? The line below will tell you!
console.log(nameChanger(name)); */

