//Answer 1
var funcCaller = function(func, arg) {
	return func(arg);
}
//Answer 2
var firstVal = function(arr, func) {
	return func(arr[0], 0, arr);
}

//Answer 3

var firstVal = function(list, func) {
	if(Array.isArray(list)) {
		return func(arr[0], 0, arr)
	} else {
		for( var k in list) {
			return func(list[k], k, list);
		} 
	}
}