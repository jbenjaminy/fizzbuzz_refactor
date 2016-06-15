    $(document).ready(function() {
        console.log(fizzBuzz());
    });

    var fizzBuzz = function() {

        var userInput = parseInt(prompt("Enter a number"));
        var output = "";
        for (var i = 1; i <= userInput; i++ ) {
            if((i % 3 === 0) && (i % 5 === 0)) {
                output = "fizzbuzz <br>";
            }
            else if (i % 3 === 0) {
                output = "fizz <br>";
            }
            else if (i % 5 === 0) {
                output = "buzz <br>";
            }
            else {
                output = i + "<br>";
            }
            $('#results').append(output);
        }
    }