// Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa

let myNumber = 42;
let myName = 'Pramod';
let temp = ''
temp = myNumber
myNumber = myName
myName = temp;

// Print integers from -52 to 1066 using a FOR loop;

for (var i = -52; i < 1066; i++) {
    // console.log(i);
};

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times;

function beCheerful() {
    console.log("good morning!")
};

// var i = 1;
// while (i <= 98) {
//     // beCheerful();
//     i = i + 1;
// };

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6;

for (var i = -300; i < 0; i++) {
    if (i == -3 || i == -6) {
        break;
    }
    if (i % 3 == 0) {
        // console.log(i);
    }
};

// Print integers from 2000 to 5280, using a WHILE;

var i = 2000;
while (i < 5801) {
    // console.log(i);
    i++;
}