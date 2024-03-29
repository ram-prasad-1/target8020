---
title: Javascript
date: '2022-03-08'
draft: false
summary: Javascript notes.
---

Note: How to read this guide

This guide is written keeping in mind both the beginners and the advanced users.
So if you are a beginner and do not understand something, just continue reading
⸺ things will be clear to you later on in the guide.

## Introduction

Javascript is a high level, dynamic, interpreted language.

Current version of javascript is called EMCAScript2020 or ES2020. However, you
only need to know ES2015 and ES2017 to understand almost all of the javascript
(as other versions just added small improvements and features).

NOTE: ES2015 is also refered to as ES6, ES2016 as ES7 and so on.

[Also, JavaScript is a completely different programming language than Java.]

<div className="page-break"/>

## Getting Started

You can use [RunKit](https://runkit.com/) to run the code. RunKit notebooks are
interactive javascript playgrounds accessible right in your browser.

## The Most Basic Rules

[also called Laxical Structure]

### Unicode

JavaScript is written in Unicode. So we can write variables in any language. But
we will just stick to English only.

### Semicolons

You can use semicolons in javascript but it’s not mandatory. So we are NOT going
to use them.

### Whitespace and Line Breaks

Whitespaces and line breaks are usually not harmful in the source code. So we
can add as many of them as we like. However, we should use them consistently for
better readability.

### Case Sensitive

JavaScript is case sensitive.

### Comments

1. Inline Comments: Starts with `//`
2. Multiline comments: `/* write anything here */` ​

## Literals, Variables and Keywords

### Literal

A literal is literally the value that is written in the source code. For
example, a number, a string, an array, a function, an object etc.

### Variable

In contrast, a variable is a name that can represent different values during the
execution of the program.

- Trivia: Actually a variable name is not same as the variable itself, it is
  just an identifier, but for practical purposes you can consider them the same
  if you think about them in this way: an identifier of a variable is the
  variable itself.

```javascript
x = 3;
// x is a variable, and 3 is a literal
```

### Keyword

A keyword is a word resrved by the language. So we cannot use them as variable
names. They help us write programs in a human readable way.

Here are all the keywords of the JavaScript:

```
break do instanceof typeof case else new var catch finally return void continue for switch while debugger function this with default if throw delete in try class enum extends super const export import implements let private public interface package protected static yield
```

## Coding Style

### Naming Style

- Function names, variable names and method names always start with a lowercase
  letter, and are camelCased.
- Only constructor functions and class names should start capitalized.
- Declare all constants in CAPS. Use \_ to separate words.
- File names should all be lowercase, with words separated by - .

###

## Variables

Start with `const` , only use `let` if you reassign the variable.

- Never use `var` as it’s old and has some side effects so just avoid it
  completely.

```javascript
// a const variables cannot be reassigned anything else after they are created.
const weekDays = 7;

// a let variable can be reassigned anything at any time.
let x = 44;
```

Variables in JavaScript do not have any data type attached. You can assign and
reassign anything to this variable, if it is allowed. (This is why JavaScript is
called dynamically typed language.)

```javascript
let x = 42;
x = 'hello';
```

### Variable declaration and initialization

NOTE: You must declare a variable before you can use it.

```javascript
// variable declaration
let a;

// variable initialization
a = 1;

// we can combine both the steps (preferred way)
let a = 1;
```

## Data Types

### Primitive types

Mostly we will be dealing with these primitive types in JS:

- Numbers
- Strings
- Booleans
- null
- undefined

### Numbers

NOTE: Internally, every JS number is a float.

```javascript
// Integer:
10;
5354576767321;
0xcc; //hex

// Float:
3.14;
0.1234;
5.2e4; //5.2 * 10^4
```

### Strings

A string type is a sequence of characters. It’s defined in the source code as a
string literal, which is enclosed in quotes or double quotes.

```javascript
'A string';
'Another string';

// Strings can span across multiple lines by using the backslash:
'A \
string';

// Strings can contain escape sequence like \, \n, \t etc:
'I\'m a developer';

// Strings can be joined using the + operator:
'a' + ' string';
```

**Template literals**

Used to create strings using powerful constructs. Very popular.

```javascript
// Note the backticks ``
`a string` // ${} marker // We can embedd any JS expression inside a template string using
`a string with ${
  something + somethingElse
}` // We can also have multiline strings like this:
`a string
with
${something} that I like.`;
```

### Booleans

JS defines two reserved words for booleans: true and false.

### null

`null` is a special value that indicates the absence of a value.

### undefined

`undefined` indicates that a variable has not been initialized and the value is
absent. Commonly returned by functions with no return value.

```javascript
// TIP: To detect if a value is undefined , you use the construct:
typeof variable === 'undefined';
```

### Object data type

Anything that’s not a primitive type is an object type. Like function, arrays,
object literals etc. Detailed description of it is given in the later on
sections.

## Expressions

Expressions are units of code that can be evaluated and **resolve to a value**.

```javascript
// expression examles
// [No need to remember]
4 / 5;
{
  a: {
    b: 1;
  }
}
a && b;
new MyRectangle('name', 2, { a: 4 });
```

## Control Flow

### if-else

```javascript
// 1
if (year < 2015) {
  alert('Too early...');
}

// 2
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// 3
if (year < 2015) {
  alert('Too early...');
} else if (year > 2015) {
  alert('Too late');
} else {
  alert('Exactly!');
}
```

### Conditional Operator

(also known as ternary operator)

```javascript
// Syntax
condition ? exprIfTrue : exprIfFalse;

const entryFee = isMember ? '$2.00' : '$10.00';
```

### switch-case

```javascript
switch (x) {
  case 'value1': // if (x === 'value1')
    // ...
    break;

  case 'value2': // if (x === 'value2')
    break;

  default:
    break;
}
```

### Loops

```javascript
// 1:
while (condition) {
  // do something
}

// 2:
do {
  // loop body
} while (condition);

// 3:
for (begin; condition; step) {}

for (let i = 0; i < 3; i++) {
  alert(i);
}
```

### break and continue

break — exit the loop immediately

continue — skip the remaining body part and continue to next iteration

```javascript
// break
for (var i = 1; i < 10; i++) {
  if (i % 3 == 0) {
    break;
  }
}

// continue
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

### Exceptions

```javascript
// try-catch
try {
} catch (e) {}

// try-catch-finally
try {
} catch (e) {
} finally {
}
```

## Operators

### Assignment Operators

```javascript
let a = 10;

a += (b) => (a = a + b);
a -= (b) => (a = a - b);
a *= (b) => (a = a * b);
a /= (b) => (a = a / b);
a %= (b) => (a = a % b);
```

### Comparison Operators

```javascript
name1 == 'alice';
name != 'Ram';

x > 5;
y < 9;

a >= 10;
b <= 12;
```

### Equality vs Strict Equality Operator

That is, == vs === And != vs !==

**The strict equal operator behave exactly like the equal operator except that
it doesn’t convert the operand before comparison.**

```javascript
console.log('10' == 10); // true
console.log('10' === 10); // false
```

### Logical Operators

```javascript
// ! (Logical NOT)
!a;

// && (Logical AND)
let result = a && b;

// || (Logical OR)
let result = a || b;
```

## Object data Type

In JavaScript, an object is a collection of properties, defined as a key-value
pair. Each property has a key and a value. The property key can be a string and
the property value can be any valid value.

- A property is basically a normal JS variable, except that it is attached to an
  object.
- A property’s value can be a function, in which case the property is known as a
  method.

### Object Creation: object literal syntax

An object can be created using object literal syntax:

```javascript
var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};
```

### Object Properties

An object property consists of a key (or name) and a value.

An object’s properties can be accessed using either: Bracket Notation or Dot
Notation.

- NOTE: To access a property using dot notation, it must be a valid variable
  identifier.

```javascript
var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};

// accessing object properties using bracket notation
myCar['make'];

// accessing object properties using dot notation
myCar.make;

// NOTE: Reading a property which does not exist will result in undefined
myCar.owner;
// undefined
```

### Computed properties

We can use square brackets in an object literal, when creating an object. That’s
called computed properties.

```javascript
let fruit = prompt('Which fruit to buy?', 'apple');

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
```

### Property value shorthand

If property key and value is same, we can use the property value shorthand like
this:

```javascript
let user = {
  name, // same as name:name
  age: 30,
};
```

### Property Names Limitations

There are no limitations on property names (we can even use reserved keywords as
property names). They can be any strings or symbols. Other types are
automatically converted to strings.

### Property existence test, “in” operator

```javascript
'key' in object;
```

### Iterate over properties of an object using for…in loop

```javascript
for (let key in myObject) {
}
```

### Adding and deleting properties to an existing object

```javascript
// Add new property:
person.age = 25;

// Delete a property:
delete person.age;
```

### Object Methods

```javascript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
    console.log(this.firstName);
  },
};
```

### `this` in methods

To access the object, a method can use the `this` keyword.

```javascript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
    console.log(this.firstName);
  },
};
```

### Object Creation: Constructor function and `new` keyword

The regular `{...}` syntax allows to create one object. To create multiple use
constructor functions. A construction funciton is just a regular function with a
convention that its name is capitalized.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// create users with the new keyword
let user = new User('Jack');
```

### Object.keys, values, entries

```javascript
let user = {
  name: 'John',
  age: 30,
};

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [["name", "John"], ["age", 30]]
```

### Optional chaining

The optional chaining `?.` is an error-proof way to access nested object
properties, even if an intermediate property doesn’t exist. The optional
chaining ?. stops the evaluation and returns undefined if the part before ?. is
undefined or null.

```javascript
let user = {}; // user has no address

alert(user?.address?.street); // undefined (no error)
```

# Standard built-in objects

### Methods of primitives

The language allows access to methods and properties of strings, numbers,
booleans and symbols (through the use of temporary object wrappers).

### Numbers

```javascript
// toString:
let num = 44;
num.toString();
// OR
(44).toString(); // Note the two dots

// Rounding
Math.floor;
Math.ceil;
Math.round;
Math.trunc;

Math.random();
Math.max(a, b, c);
Math.min(a, b, c);
Math.pow(n, power);
```

### Imprecise calculations

Due to how the binary system works, there is no way to store many decimal
numbers exactly. The language solves this by rounding to the nearest possible
number.

```javascript
alert(0.1 + 0.2 == 0.3); // false as
alert(0.1 + 0.2); // 0.30000000000000004

// Work around
let sum = 0.1 + 0.2;

alert(sum.toFixed(2)); // 0.30
// or
alert(+sum.toFixed(2)); // 0.3
```

### Infinity and NaN

-
- Infinity (and -Infinity) is a special numeric value that is greater (less)
  than anything.
- NaN represents an error. \[NaN —> Not a Number]

### parseInt and parseFloat

Numeric conversion using a plus + or Number() is strict. parseInt and parseFloat
solves that issue.

```javascript
alert(+'100px'); // NaN
alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5
```

### Strings

Strings are immutable in JavaScript.

```javascript
let single = 'single-quoted';
let double = 'double-quoted';

let backticks = `backticks`; // Template Literal
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Special characters
// \n, \t, \\, \', \", etc.
let str1 = 'Hello\nWorld';

// String length
'hello'.length;

// iterating over a string
for (let char of 'Hello') {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// search for a substring
alert('Hello'.includes('Bye')); // false

// get a substring
let str = 'stringify';
alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // 'gif'
```

### Arrays

An ordered collection

```javascript
let arr = [];
let fruits = ['Apple', 'Orange', 'Plum'];

// Array elements are numbered, starting with zero.
alert(fruits[0]); // Apple
alert(fruits[2]); // Plum

fruits.push('Pear');
fruits.pop();

// Looping over an array
// Use for..of if you only need array elements
for (let fruit of fruits) {
  alert(fruit);
}

// Use this if you also need the index
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// NOTE: Do not use for..in for arrays

// toString
let arr = [1, 2, 3];
alert(String(arr) === '1,2,3'); // true

delete arr[1];
```

### splice

The arr.splice(start) method is a swiss army knife for arrays. It can do
everything: insert, remove and replace elements.

```javascript
arr.splice(1, 1); // from index 1 remove 1 element

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", 'dance');

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');
```

### slice

It returns a new array copying to it all items from index start to end (not
including end). Both start and end can be negative, in that case position from
array end is assumed.

```javascript
let arr = ['t', 'e', 's', 't'];
alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)
```

## Arrays

An ordered collection

```javascript
let arr = [];
let fruits = ['Apple', 'Orange', 'Plum'];

alert(fruits[0]); // Apple
alert(fruits[2]); // Plum

fruits[2] = 'Pear';

delete fruits[1];
```

### Length

array.length isn’t necessarily the number of items in the array.

Remember — The length of the array is one more than the highest index.

```javascript
fruits.length;
```

### Add/Remove Items

```javascript
fruits.push('Pear');
fruits.pop();
```

### Looping over an array

```javascript
// Use for..of if you only need array elements
for (let fruit of fruits) {
  alert(fruit);
}

// Use this if you need the index
arr.forEach((item, index, array) => {
  alert(index);
});

// or you can just use traditional for loop
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// NOTE: Do not use for..in for arrays
```

### map

The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of
results.

```javascript
let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map((item) => item.length);
alert(lengths); // 5,7,6

// complete syntax
let result = arr.map((item, index, array) => {
  // returns the new value instead of item
});
```

### filter

The `filter()` method creates a new array with all elements that pass the test
implemented by the provided function.

```javascript
const words = ['spray', 'limit', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

// complete syntax
const result = arr.filter((item, index, array) => {
  // if true, item is pushed to results and the iteration continues
});
```

### reduce

They are used to calculate a single value based on the array.

```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

// complete syntax
let value = arr.reduce((accumulator, item, index, array) => {}, [initial]);
```

### Array.isArray

Arrays do not form a separate language type. They are based on objects. So
`typeof` does not help.

```javascript
alert(typeof {}); // object
alert(typeof []); // object

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
```

### Miscellaneous

NOTE: Methods `sort`, `reverse` and `splice` modify the array itself.

### sort(fn)

The call to arr.sort() sorts the array in place, changing its element order.

```javascript
let arr = [1, 2, 15];
arr.sort();
alert(arr); // 1, 15, 2

// To use our own sorting order, supply a function
arr.sort(compareNumeric);
```

###

### splice

The arr.splice(start) method is a swiss army knife for arrays. It can do
everything: insert, remove and replace elements.

```javascript
arr.splice(1, 1); // from index 1 remove 1 element

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", 'dance');

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');
```

### reverse

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1
```

### slice

It returns a new array copying to it all items from index start to end (not
including end). Both start and end can be negative, in that case position from
array end is assumed.

```javascript
let arr = ['t', 'e', 's', 't'];
alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)
```

### concat

The method arr.concat creates a new array that includes values from other arrays
and additional items.

```javascript
let arr = [1, 2];

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
```

## Destructuring assignment

Used in objects , arrays and import statements. Nested destructuring is also
allowed.

### Array Destructuring

```javascript
let arr = ['Ram', 'Deora'];
let [firstName, surname] = arr;

// rest destructuring
const [users, ...rest] = this.state;

// default values
let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

// Tip: Unwanted elements of the array can also be thrown away via an extra comma:
let [firstName, , title] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];
```

###

### Object Destructuring

```javascript
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};
let { title, width, height } = options;

// default values
let { width = 100, height = 200, title } = options;

// Tip: rest destructuring
const { users, ...rest } = this.state;

// Tip: setting alias while destructuring
const { name: n } = student;
```

### Smart function params

```javascript
// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

// destructuring
function Greeting({ greeting, extraInfo = ' 2020' }) {
  return <h1>{greeting + extraInfo}</h1>;
}
```

### Smart Imports

```javascript
import { a } from 'module';
import { a, b } from 'module';
```

## Spread Operator

```javascript
// Get a new copy of an array/object
const clone = [...a];
const cloneObject = { ...b };

// You can combine multiple objects/arrays and add extra elements too
const person = { name: 'Jhon' };
const student = { ID: '21', GPA: '3.0' };

const new_object = { ...person, ...student, semester: '3' };

const newList = [...list1, ...list2, 'Hello', 'bye'];

// Rest parameters
function showName(firstName, lastName, ...titles) {}

// Use with destructuring assignment
const [users, ...rest] = this.state;
const { titles, ...rest } = this.topics;
```

## Prototypes, inheritance

Every single JavaScript object has a property, called prototype , which points
to a different object. This different object is the **object prototype**.

To get the object prototype, use `Object.getPrototypeOf(obj)`.

```javascript
let animal = {
  eats: true,
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal);

// NOTE: You can also use obj.__proto__ but that is considered outdated now.
```

## Classes

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello, I am ' + this.name + '.';
  }
}

// usage
const flavio = new Person('Flavio');
flavio.hello();
```

### Classes inheritance

```javascript
class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.';
  }
}

const flavio = new Programmer('Flavio');
flavio.hello(); // 'Hello, I am Flavio. I am a programmer.'
```

### Static methods

Normally methods are defined on the instance, not on the class. Static methods
are executed on the class instead:

```javascript
class Person {
  static genericHello() {
    return 'Hello';
  }
}

Person.genericHello(); //Hello
```

## Functions

In JavaScript, functions are actually objects.

Just like any typical object, they have attributes and methods too.

- The only thing that differentiates them from the objects is that they can be
  called.

A function can be called with any number of arguments, no matter how it is
defined.

```javascript
// Function Declaration
function function_name(Arg1, Arg2) {}

// Function Expression
// It’s often used when you want to use your function as callback function.
var var_name = function function_name(Arg1, Arg2) {}; // Named
var var_name = function (Arg1, Arg2) {}; // Anonymous
// Arrow Functions
// You can exclude function parentheses if it only takes one parameter.
// If there is only one statement inside function body then you can omit return keyword as well as the curly braces
var var_name = (Arg1, Arg2) => {};

// function hoisting only works with function declaration and not with function expression (not with arrow functions too).
```

Note: Arrow functions do not have `arguments`.

### Closures

A function remembers its Lexical Scope, and it’s able to access variables that
were defined in the parent scope. The scope basically is the set of variables
which are visible.

In other words, a closure gives you access to an outer function’s scope from an
inner function. In JavaScript, closures are created every time a function is
created, at function creation time.

```javascript
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }

  displayName();
}
```

## this Keyword

The value of `this` depends on what context it is used in.

If it is used in a function, it’s value will depend on how that function is
invoked, i.e., the call site.

### Left of the Dot Rule

Whatever is to the left of the dot is what `this` is.

### Implicit Binding

When the dot notation is used to call a function that is in an object or an
object of a class, we say that this was bound implicitly.

### Explicit Binding

Standalone functions can be bound explicitly to objects at call time.

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function () {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// '.call()' can be used to explicitly bind a function to an object
printName.call(me);

// printName() is not bound to an object so 'this' is undefined
printName();
```

### call() vs apply()

```javascript
var printInfo = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`
  );
};

// Create an array of languages
languages = ['Javascript', 'C++', 'Python'];

// Pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);

// Pass all the arguments in one array to .apply()
printInfo.apply(me, languages);
```

### bind()

When called on a function, `.bind()` sets a `this` context and returns a new
function with a bound `this` context.

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function () {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// Here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);

// bound newPrintName() prints appropriately
newPrintName();

// unbound printName() prints undefined
printName();
```

### Arrow functions have no `this`

With arrow functions there are no binding of `this`.

- NOTE: Due to this, arrow functions are not suited as object methods.

### Global Context

When `this` is used outside of any context such as a class, function, or object,
it refers to the global object. The global object in the browser is usually the
`window` object.

## Promise

A Promise represents the eventual result of an asynchronous operation.

Promise object can be in one of three states:

- Pending: The initial state— the operation has not completed yet.
- Fulfilled: The operation has completed successfully and the promise now has a
  resolved value.
- Rejected: The operation has failed and the promise has a reason for the
  failure.

A promise is settled if it is no longer pending. A promise always resolve to a
value.

```javascript
let promise = new Promise((resolve, reject) => {})
  .then(
    (result) => {},
    (error) => {}
  )
  .catch((error) => {})
  .finally(() => {});

// Error will be propagated till it is captured by any then()/catch()
// finally handler passes through results and errors to the next handler
```

```javascript
// Promise API
let promise = Promise.resolve(value); // both same
let promise = new Promise((resolve) => resolve(value));

let promise = Promise.all([...promises]);
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array membe
```

```javascript
// Promisification
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// ==>
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};
```

## Async/await

```javascript
// async ensures that the function returns a promise
async function f() {
  return 1;
}

// await works only inside async functions, it should be only used with promises
let value = await promise;
```

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait till the promise resolves

  alert(result); // "done!"
}

f();
```

### Trick

1. If I promise my dad something, I must resolve/reject my promise and my dad
   must then/catch.

2. Async function always returns a promises so by point 1, the receiver must
   then/catch.

### Error Handling

If a promise resolves normally, then await promise returns the result. But in
case of a rejection, it throws the error, just as if there were a throw
statement at that line.

```javascript
async function f() {
  await Promise.reject(new Error('Whoops!'));
}

// <==>
async function f() {
  throw new Error('Whoops!');
}

// We can catch that error using try..catch, the same way as a regular throw:
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

## JavaScript Runtime

### Execution Context

When a JavaScript engine executes a script, it creates execution contexts. Each
execution context has two phases: the creation phase and the execution phase.

\[TO DO]
