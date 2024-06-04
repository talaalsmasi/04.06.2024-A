/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function  tellforture (jobTitle, geographicLocation, partnerName, numberOfChildren) {
    console.log("You will be a " + jobTitle + " in " + geographicLocation + "," + "and married to " + partnerName + " with " + numberOfChildren + " kids.");
}
tellforture ("softeware engineer", "Jordan", "Alice", 3)


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge (age)
{
    let result = age * 7;
    console.log("your doggie is " + result + " years old in dog years!" )
}
calculateDogAge(1)
 


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply (age1, amountperday)
{
    let cups = (100 - age1) * amountperday * 365 ;

    console.log("you will need " + cups + " cups of tea to last you until the ripe old age of 100")
}
calculateSupply (30, 3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function great (name1)
{
    console.log("hello " + name1 )
}
great ("Adam")


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
the x should be cat



function double(7) {
  return 2 * 7;
}
the 7 should be letters



function double('7') {
  return 2 * 'x';
}
the 7 should be num 
the x should be num
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
fix these functions:
func double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function double2 (x){
return 2 * x;
}

function (x) double3 {
  return 2 * x;

function  double3 (x) {
  return 2 * x;}

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube (num2){
    let x3 = num2 * num2 * num2
    console.log(x3)
}
cube(4)


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply (parameters, calculate){
    result2= parameters * calculate ;
    console.log(result2);
}
multiply (3, 4)
multiply (5, 4)





/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense (age2)
{
    if (age2>=20){
    console.log("yes you can")
}
else
{
    let age3 = 20 - age2
    console.log("please come back after " + age3 + " years to get one")
}
}
canIGetADrivingLicense (21)
canIGetADrivingLicense (17)
canIGetADrivingLicense (20)



/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength (strings, strings2)
{
     let length1=strings.length ;
     let length2=strings2.length ;
     if (length1===length2) {
        console.log("true")  
     }
     else{
        console.log("false")
     }
}
sameLength("tree","clue")
sameLength("tree","car")



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer (numx, numy){
    if(numx>numy){
        console.log(numx)
    }
    else{
        console.log(numy)
    }
    }
largerNubmer(5,6)
largerNubmer(5,3)




/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNumber(numa, numb, numc) {
    if (numa > numb && numc > numb) {
        console.log(numb);
    } else if (numb > numa && numc > numa) {
        console.log(numa);
    } else {
        console.log(numc);
    }
}
smallerNumber(5,3,3)
smallerNumber(5,99,3)
smallerNumber(5,99,34)
smallerNumber(8,6,7)






/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
/*
function shorterString (st1, st2, st3, st4, st5){
    let str1=st1.length;
    let str2=st2.length;
    let str3=st3.length;
    let str4=st4.length;
    let str5=st5.length;
    if (str1) {
        
    }


    
}




/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number) {
    if (number % 2 == 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    
}
isEven(1)
isEven(2)


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number1) {
    if (number1 % 2 == 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
    
}
isOdd(4)
isOdd(5)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(pnum) {
    if (pnum /-1 == -pnum) {
        console.log(pnum * 1)
    }
    else{
        console.log(pnum * -1)
    }
}
positive(4)
positive(-5)


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullname(name1 , name2 ) {
    console.log(name1 + " " + name2)
}
fullname("Alex", "Mercer")


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1, n2, n3, n4, n5) {
    avg = (n1 + n2 + n3 + n4 + n5)/5
    console.log(avg)
}
average(5,7,9,3,5)
average(1,2,3,4,5)



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
    return Math.random()*1;
}
randomNumber()

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(N1, N2) {
    Math.random ()*8
}
randomBetweenNumbers(1,8)


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversity(av) {
    if (av >= 0 && av < 50) {
        console.log("F");
    } else if (av >= 50 && av < 70) {
        console.log("D");
    } else if (av >= 70 && av < 85) {
        console.log("C");
    } else if (av >= 85 && av < 95) {
        console.log("B");
    } else {
        console.log("A");
    }
}
scoreInUniversity(96)
scoreInUniversity(3)


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var counter1 = 0;
function counter() {
  ++counter1;
  console.log(counter1);
}

console.log(counter());
console.log(counter());


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
var counter1 = 1;
function counter() {
  console.log(counter1);
  counter1++;
}
function resetCounter() {
  console.log(--counter1 + "And the counter is reset now");
  counter1 = 1;
}

console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());