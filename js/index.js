'use strict';

var myAnimal = {};

myAnimal.username = "Nacho";
myAnimal['tagline'] = "I like bones";

var noises = [];

myAnimal.noises = [];


for(var key in myAnimal){
	if(key === "username"){
		console.log("Hi my name is " + myAnimal["username"]);
	}
	else if(key === "tagline"){
		console.log("I like to say " + myAnimal.tagline)
	}
	else{
		 console.log(myAnimal[key]);
	}
}
/*
var box = [];

box['size'] = 9;
box['0'] = 'meow';
box.push('WooooooO!');

for(var i = 0; i < 3; i++){
	console.log(box[i]);
}*/

var noiseArray = ["Arf", 'Quack'];
	noiseArray.unshift("Meow");
	noiseArray.push('Moo');
	noiseArray[4] = "Fart";

	console.log(noiseArray.length);
	console.log(noiseArray.lastIndexOf());

myAnimal.noises = noiseArray;
console.log(myAnimal)

var animals = []

animals[0] = "Tiger";
animals[1] = "Ducky";

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