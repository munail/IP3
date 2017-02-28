//Business logic
var pingPong = function (userInput) {
    var result = [];
    for (var x = 1; x <= userInput; x++) {
        if (x % 15 === 0) {
            result.push("pingpong");
        } else if (x % 5 === 0) {
            result.push("pong");
        } else if (x % 3 === 0) {
            result.push("ping");
        } else {
            result.push(x);
        }
    }
    return result;
};
//user interface
$(document).ready(function () {
    $("form#forminput").submit(function (event) {
        event.preventDefault();
        $("ul#output").empty();
        var userInput = parseInt($("input#number").val());
        var result = pingPong(userInput);
        result.forEach(function (number) {
            $("ul#output").append('<li>' + number + '</li>');
        });
    });
});