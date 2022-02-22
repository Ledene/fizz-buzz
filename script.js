let number = parseInt(prompt("How many FizzBuzz numbers would you like to see in the console?"));
let fizzBuzz = [];

for (i = 1; i > 0; i++) {
    if (i % 15 !== 0) {
        continue;
    } else fizzBuzz.push(i);
     if (fizzBuzz.length == number) {
         break;
     }
}

let answer = fizzBuzz.toString().replaceAll(",", " ");

alert(`Here are the ${number} FizzBuzz numbers you asked for: ${answer}`);