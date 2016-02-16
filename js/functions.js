//ANSWER 1

var animalTestUser = function(username) {
	return {
		'username': username
	}
}

var myCow = animalTestUser('Mooface');

console.log(myCow.username); // "Mooface"

//ANSWER 2
var animalTestUser = function (username) {
	var args = arguments.length;
	var otherArgs = [];

	if(args > 1) {
		for (var i = 1; i < args; i++) {
			otherArgs.push(arguments[i]);
		}
	}

	return {
		username: username,
		otherArgs: otherArgs
	}
}

//AnimalTestUser("GREG", "CVOW", "CHOW", "NOW");

// ANSWER 3 - constructor function 
var AnimalCreator = function(username, species, tagline, noises){
	var animal = {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	}
	return animal;
}

var greg = AnimalCreator("greg", "human", "JS", ["yo", "sup", "howdy"]);
console.log(greg);

//ANSWER 4
function AddFriend(animal, friend){
	animal.friends.push(friend[username]);
}

var cori = AnimalCreator('otter', 'sherman', 'schnarf', ['meep', 'boop', 'bop']);
console.log(cori);

AddFriend('lambs', 'lambchop');

//ANSWER 5

//ANSWER 6
var myFarm = [sheep, cow, llama];

addFriend('dog', 'duck');

console.log(myFarm);

// Answer 7
function addMatchesArray(farm){
	for(var animal in farm){
		farm[animal].matches = [];
	}
	addMatchesArray(myFarm);
	console.log(myFarm);
}

// Answer 8
function giveMatches(farm){
	for (var animal in farm){
		farm[animal].matches.push(farm[animal].friends[0]);
	}
	giveMatches(myFarm);
	console.log(myFarm);
}

var friendsUserNames = [];

friendsUserNames.push(animals[0].username, animals[1].username);


console.log(friendsUserNames);
