//var names = ['Sam', 'Sammy', 'Samuel'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe("Sam"));

// var person = {
// 	name: 'Sam',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// }

// person.greet();

function add(a, b) {
	return a + b;
}

var addExpression = (a, b) => a + b;

var addStatement = (a, b) => {
	return a + b;
}

console.log(add(3, 4));
console.log(addExpression(10, 2));
console.log(addStatement(11, 4));
