/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -> The value of 'this' keyword is the window object when a function is invoked directly
* 2. Implicit Binding -> The value of 'this' keyword changes based on how we call a method
* 3. New Binding -> The value of 'this' keyword will be the object from instance created with a Constructor
* 4. Explicit Binding -> The value of 'this' keyword can be changed when we invoke a function with .call, .apply or we can create a new function by using .bind and different 'this' value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowThis() {
	return this;
}
console.log('Principle 1:', windowThis());

// Principle 2

// code example for Implicit Binding
var objThis = {
	thisObj: windowThis,
};
console.log('Principle 2:', objThis.thisObj());
// Principle 3

// code example for New Binding
function ConstructorThis() {
	this.binding = 'New Binding';
}
console.log('Principle 3:', (new ConstructorThis()));
// Principle 4

// code example for Explicit Binding
function multiply(n1, n2) {
	console.log(`${n1} * ${n2} = ${n1*n2}`);
	return this;
}
console.log('Principle 4 Call:', multiply.call('call explicit binding', 10, 20));
console.log('Principle 4 Apply:', multiply.apply('apply explicit binding', [10, 20]));
const bindMultiply = multiply.bind('bind explicit binding');
console.log('Principle 4 Bind:', bindMultiply(10, 20));