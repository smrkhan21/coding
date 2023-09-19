// Implement map method in JS

/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

array.map(function(currentValue, index, arr), thisValue)

eg:

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

*/

Array.prototype.customMap = function(callback) {
    const result = []
    for(let i = 0; i<this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
}