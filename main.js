/* FizzBuzz */
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.writeln("FizzBuzz" + "<br>") ;
    console.log("Frizbuzz");
  } else if (i % 3 == 0) {
    document.writeln("Fizz" + "<br>");
    console.log("Fizz");
  } else if (i % 5 == 0) {
    document.writeln("Buzz" + "<br>");
    console.log("Buzz");
  }
  else {
  document.writeln(i + "<br>");
  console.log(i);
  }
}
