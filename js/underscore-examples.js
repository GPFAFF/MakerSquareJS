//Answer 1
var collection = [1, 2, 3, 4, 5]

_.each(collection, function(num) {
	console.log(num);
});

//Answer 2

var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === val) {
			return true
		} else {
			return false;
		}
	}
}
checkValue(helloArr,'bonjour');

//Answer 3
var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
	result = false;
	_.each(arr, function(name) {
		if(name === val) {
			return true;
		}
	});
	return result;
}

checkValue(helloArr,'bonjour');

//Answer 4

var obj = {
	input: {
		two: 2, 
		four: 4, 
		three: 3, 
		twelve: 12
	}
}
var results = [];

for(key in obj.input) {
	results.push(obj.input[key]);
	console.log(results);
}

//Answer 5

var obj = _.map(obj[input], function(val, props) {
	console.log(val);
});

//Answer 6

var obj = _.filter(obj[input], function(val) {
	if(val % 2 === 0) {
		return val;
	}
})
 

