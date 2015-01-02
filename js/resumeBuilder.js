// ===JSON Object

var bio = {"name":"Ce BIAN", 
		   "role":"Consultant Decisionnel", 
		   "contact": {"mobile":"06.21.21.68.48",
		    		   "email":"cbbc1983@gmail.com",
			           "location":"Bordeaux"
		   }, 
		   "picture":"Url", 
		   "message":"Bienvenue sur mon site perso", 
		   "skills":["QlikView", "Talend", "Oracle", "SQL"]};

var education = {
	"schools": [
	       {"school":"Universite Lyon 2",
		    "city":"Lyon",
		    "level":"Bac+5",
		    "majors":["info","stat"]
	       },
	       {"school":"Universite Grenoble 2",
		    "city":"Grenoble",
		    "level":"Bac+3",
		    "majors":["math","info"]
	       }   
	],
	"onlineCourses": [
			{"title": "Javascript",
			 "school": "Udacity",
			 "dates": "2014" 	
			}
	] 
};

var work = {
	"jobs": [
	       {"employer":"MiPih",
		    "city":"Bordeaux"
	       },
	       {"employer":"Maya",
		    "city":"Bordeaux"
	       }   
	]
};

var project = {
	"projects": [
	       {"name":"RHLook"
	       },
	       {"name":"BilanSocial"
	       }   
	]
};

// ===Nettoyer '<' '>'
/*
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    
    //newHTML = encodeURIComponent(newHTML);
    newHTML = newHTML.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));
*/

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

