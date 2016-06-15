'use strict';
    $(document).ready(function() {
        console.log(fizzBuzz());
        event.preventDefault();
    });

    var fizzBuzz = function() {
        event.preventDefault();

        var userInput = parseInt(prompt("Enter a number"));
        for (var i = 1; i <= userInput; i++ ) {
            if((i % 3 === 0) && (i % 5 === 0)) {
                document.write("fizzbuzz <br>");}
            else if (i % 3 === 0) {
                document.write("fizz <br>");}
            else if (i % 5 === 0) {
                document.write("buzz <br>");}
            else {
                document.write(i + "<br>");
            }
        }
    }
