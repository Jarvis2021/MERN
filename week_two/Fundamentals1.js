//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Pramod";
var temp = ""
temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber);
console.log(myName);

// Print integers from -52 to 1066 using a FOR loop.

for (var x=-52; x<=1066; x++){
    console.log(x);
}

//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    return console.log("good morning");
}

for (var i=1; i<=98; i++){
    console.log(i)
    beCheerful();
}

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var i=-300; i<0; i++){
  if (i==-3 || i==-6) {
    continue;
  }
  else if (i%3==0){
    console.log(i);
  }
}


//Print integers from 2000 to 5280, using a WHILE.

var i = 2000;
while (i<=5280){
  console.log(i);
  i++;
}

//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function findbirthday(x,y){
  if(x==2 && y==3 || x==3 && y==2){
    console.log("How did you know?");
  }
  else {
    console.log("Just another day....");
  }
}

findbirthday(2,3);


//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function year(x){
  if (x%4==0 || x%400==0 || x%100==0){
    console.log("Its a leap year");
  }
  else { console.log("Not a Leap year")}
}

year(2001);


// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
var count =0
for (var i=512; i<=4096; i++){
  if(i%5==0){
    console.log(i);
    count +=1;
  }
}
console.log(count);

//Print multiples of 6 up to 60,000, using a WHILE.

var i=6;
while (i <= 60000){
  if(i%6==0){
    console.log(i);
    count +=1;
  }
  i++
}
console.log(count);


// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (var i=1; i<=100; i++){
  if(i%10 ==0 && i%5==0) {
    console.log("Dojo");
  }
  else if (i%5==0){
    console.log("Coding");
  }
  else{ console.log(i);}
}


//Your function will be given an input parameter incoming. Please console.log this value.

function printinput(x){
  console.log(x);
}

printinput(1);
printinput("Hello");



// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

var i = -300000;
var sum = 0;
while(i<=300000)
{
  if(i%2!=0) {
      sum += i;
  }
  i++;
  console.log(sum);
}


// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var i= 2016
while (i>0){
  console.log(i);
  i -=4;
}
