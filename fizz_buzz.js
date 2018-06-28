
//40 can be changed to a variable to alter the length of the game

for (var i=1; i < 40; i++){
    if (i % 5 == 0 and i % 7 == 0)  console.log("FizzBuzz");
    else if (i % 5 == 0) console.log("Fizz")
    else if (i % 7 == 0) console.log("Buzz")
    else console.log(i)
}