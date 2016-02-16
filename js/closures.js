//ANSWER 1
var nonsense = function(string) {
	var blab = function () {
		alert(string);
	}
	blab();
}
nonsense("XFILES!");


//ANSWER 2

var nonsense = function(string) {
	var blab = function () {
		alert(string);
	}
	setTimeout(blab, 2000);
}
nonsense("XFILES!");

//ANSWER 3

var nonsense = function(string) {
	var blab = function () {
		alert(string);
	}
	return blab;
}

var blabLater = nonsense("toys!");
blabLater();

//ANSWER 4

var lastNameTrier = function (firstName) {
	//does stuff

	var innerFunction = function(lastName) {
		console.log(firstName + " " + lastName)
	}
	return innerFunction;
} 
var firstNameFarmer = lastNameTrier('Greg'); //logs nothing
	firstNameFarmer('Pfaff');

//ANSWER 5

var storyWriter = function() {
	var story = '';
	return {
		addWords: function(str) {
		  console.log(story += str + ' ');
		  return story.trim();
		},
		erase: function() {
          story = ' ';
		}
	};
};

var farmLoveStory = storyWriter();
	farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
	farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'
	
	var storyOfMyLife = storyWriter();
	storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
	storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
	storyOfMyLife.erase();

// ANSWER 7
var myToaster = function() {
	var maxTemp = 500;

	return {
		temp: 0,
		setTemp: function(newTemp) {
			if(newTemp > maxTemp) {
				console.log("Shit thats too hot!")
			} else {
				temp = newTemp;
			}
		}
	}
}

var Toaster = myToaster();

Toaster.setTemp(550);

*/

/*var g = "global";

function blender(fruit, mixer) {
	var b = fruit;
	var y = mixer;

	function blend() {
		alert(b + " and " + y + " makes " + b + y + " swirl");
	}
	blend();
}

blender('blueberry', 'poop')*/

/*var closure = function () {
	var x = 0;
	
	var alerter = function() {
		alert(++x);
	}
	return alerter;
	console.log("will still run right after")
};

var funcStorer = closure();
funcStorer();
funcStorer();
var funcStorer2 = closure();

funcStorer2();*/

/*var numbers = function() {
	var num1;
	var num2;
	var adder = function() {
       num1 + num2
	}
	return adder;
}

var add = function(num) {
	var num1 = num;

	var adder = function(num2) {
		return num1 + num2
	}
	return adder;
}

var add5 = add(5);
add5(2);*/

/*function counter() {
	var n = 0;
	return {
		count: function() { return n++;},
		reset: function() { n = 0; }
	};
}
var myCounter = counter();*/

/*var makeStopWatch = function() {
	console.log("Intialized");
	var elapsed = 0;
	console.log(elapsed);

	var stopWatch = function() {
		console.log('stopwatch');
		return elapsed;
	};

	var increase = function() { elapsed++;}

  setInterval(increase, 1000);		
  return stopWatch;
}

var x = makeStopWatch();
x();
*/
