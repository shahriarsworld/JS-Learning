// let age = 17;
// if (age>=18){
//     console.log("You are eligible to vote.");
// }else{
//     console.log("You are not eligible to vote.")
// }

// let marks = prompt("Enter your marks: ");
// marks = parseInt(marks);

// if (marks>=80){
//     console.log("A+");
// }else if (marks>=70){
//     console.log("B+");
// }else{
//     console.log("Good");
// }

// let age = 10;

// if (age>=18){
//     console.log("You can vote");
// } else{
//     console.log("You can not vote");
// }

//nested if-else
hasLicence = true;
isSober = false;

if (hasLicence){
    if(isSober){
        console.log("You can Drive");
    }else{
        console.log("you cannot drive in this state. Stay safe");
    }
}else{
    console.log("You can not drive without a licence");
}

//Ternary Operator
let ageNow = 17 ;
let check = (ageNow >= 18)? "You can vote" : "You cannot vote";
console.log(check);

//Switch Statement

let day = 8;

switch (day){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Input");
}