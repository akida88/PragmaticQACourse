// An empty object can be created using one of two syntaxes: 
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// Property values are accessible using the dot notation:
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;

console.log(user); // Object { name: "John", age: 30, isAdmin: true }

// To remove a property, we can use delete operator:
delete user.age;

// We can also use multiword property names, but then they must be quoted:
let newUser = {
  name: "Peter",
  age: 35,
  "likes birds": true  // multiword property name must be quoted
};

// For multiword properties, the dot access doesn’t work:
alert(user["likes birds"]); // true
user["likes testing"] = true; // set new property
delete user["likes birds"]; // delete property