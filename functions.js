function greet (name) {
    return "Assalamualaikum "+ name +" Bhai";
}
console.log(greet("Shahriar"));

//arrow
const hello = (name, age)=> "Hello "+ name + ". Your age is "+ age +"!";

console.log(hello("Haris",25));

const area = (length, width) => length*width;
console.log("area is ", area(5,4));
