/*var animal = {};

animal['username'] = "Greg";

console.log(animal);*/

var animal = {
	username: 'Greg',
	color: "Green",
	size: "Large"
};

var noiseArray = ['bark', 'pop', 'burp','fart'];
noiseArray.push('Oink');
noiseArray[0] = "meow";
noiseArray[5] = "yip"

noiseArray[noiseArray.length - 1 = "hoohaaa"];

noiseArray[6] = {username: 'DaffyDuck', tagline: "Yippee", noises: []}

var animal = {};

animal['tagline']= "Pfaff";
animal['username']= "Greg";
animal.noiseArray = noiseArray;



for(var key in animal){
	if(key === "username"){
		console.log("Hi my name is " + animal["username"]);
	}
	else if(key === "tagline"){
		console.log("I like to say " + animal.tagline)
	}
	else{
		 console.log(animal[key]);
	}
}


var animals = [];

animals[0] = "Tiger";

var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yippee!',
	noises: ['quack', 'honk', 'sneeze', 'growls']
}
var lions = {
	username: "Mufasa",
	tagline: "Damn you scar!",
	noises: ['growls', 'roars', 'snors']
}
var bears = {
	username: "Smokey",
	tagline: "Only you can prevent forest fires",
	noises: ['snors', 'roars', 'groans']
}

//animals['friends'] = {};
//animals['friends'].username = "Greg";


animals.push(quackers, lions, bears);

var friends = {};

friends.username = animals[0];
friends.username2 = animals[1]['username'];
friends.username3 = animals[2]['username'];

var relationships = {};

relationships['friends'] = friends;

var matches = [friends];






/*
var usernames = {}
usernames = friends;

usernames[friends]['username'] = true;

usernamesfriends]["Goats"];
usernames[friends]["Pigs"];

*/

