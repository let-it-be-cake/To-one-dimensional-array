"use strict"
var array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [0]]]];
var arr = [];
var j = 0;
var ur = document.querySelector(".unr");
//var lengtharray = array.length;
function numb(ara, arr) {
	for (var i = 0; i < ara.length; i++) {
		if (typeof(ara[i]) == "object") {
			numb(ara[i], arr);
		} else {
			arr[j] = ara[i];
			j++;
		}
	}
}
numb(array, arr);
j = (arr.length * 2) - 1;
for (var i = arr.length - 1; i >= 0; i--) {
	ur.childNodes[j].textContent = arr[i];
	j -= 2;
}
if (true) {
	console.log("alert");
};