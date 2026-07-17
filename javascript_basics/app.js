// console.log("Hello from app.js");
// let age = 5;
// console.log(age>18 ? "Adult" : "Minor");

// let s = "abhishek";


// if (s[0]=='a' && s.length>3){
//     console.log("String is the good string")
// }
// else{
//     console.log("String is not the good string")
// }


// let day = 3;
// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// alert("This is an alert box");
// prompt("This is a prompt box");

// let firstName = prompt("Enter your first name:");
// console.log("hey " + firstName);

// let str = "        Hello,        World!       ";
// console.log(str.trim());

// let a = "abhishek mishra";
// // let b = a.toUpperCase().slice(0,4);
// console.log(a.slice(11));
// // console.log(b);

// let num = [1,2,3,4,5];  
// console.log(num);




// loops   


    // for (let i=15; i>=1; i-=2){
    // console.log(i);
// }

// even number 

// for (let i=100; i>=1; i-=2){
//     console.log(i);
// }

// infinite loop 

// for (let i=1; ; i++){
//     console.log(i);
// }

// table of 5
// for (let i=1; i<=10; i++){
//     console.log("5 x " + i + " = " + (5*i));
// }

// let n = prompt("Enter a number to print its table:");
// for (let i=1; i<=10; i++){
//     console.log(n + " x " + i + " = " + (n*i));
// }


// nested loops


// for (let i=1; i<=3; i++){
//     for (let j=1; j<=3; j++){
//         console.log(i + " " + j);
//     }
// }

// // guess favourite movie 
// let favMovie = "Inception";
// let guess = prompt("Guess my favourite movie:");
// while ((guess !== favMovie) && (guess !== 'quit')){
//     guess = prompt("Wrong guess! Try again:");
// }

// if (guess === favMovie){
//     console.log("Congrats!! You guessed it right.");
// }
// else {
//     console.log("You chose to quit. Better luck next time!");
// }



// nested loops with nested arrays 


let heroes = [
    ["Superman", "Batman", "Wonder  Woman"],
    ["Spiderman", "Ironman", "Hulk"],
    ["Thor", "Loki", "Hela"]
];
for (let i=0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for (let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}


// for of loop

// let colors = ["red", "green", "blue", "yellow"];
// for (color of colors){
//     console.log(color);
// }


// generating the random number 

Math.floor(Math.random()*100)+1;



//  finding the max in a array 

let arr = [1,4,6,7,4,5,,8,19];

let max = -1;

for (let i=0; i<arr.length; i++){
    if (max < arr[i] ) {
        max = arr[i];
    }
}

console.log(max);