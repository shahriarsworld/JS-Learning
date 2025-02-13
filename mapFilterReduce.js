//using map

//doubling numbers
const numbers = [2,5,6,8,9,10];
const doubled = numbers.map(num => num*3);
console.log(doubled);

//Uppercasing names
const names = ["asif", "emon", "zeux", "necromancer"];
const upperC = names.map(name => name.toUpperCase());
console.log(upperC);

//using filter

//Finding fresh items from the list
let items =[
    {name: "Milk", expired: true},
    {name: "Bread", expired: false},
    {name: "Biscuit", expired: false},
    {name: "Chips", expired: true},
];
const freshItems = items.filter(item => !item.expired);
console.log(freshItems);
