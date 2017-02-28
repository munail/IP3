//Business Logic
var range = [];

function pingPong(userInput){
	for(i= 1;i<= userInput;i++){
		range.push(i);
	}

	for(index=0;index<=range.length;index++){
		if(range[index]%15 === 0) {
			range.splice(index, 1, "pingpong");
		} else if(range[index]%5 === 0) {
			range.splice(index, 1, "pong");
		} else if(range[index]%3 === 0) {
			range.splice(index, 1, "ping");
		};
	};
}

//UI
$(document).ready(function() {
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = $("#input").val();

		pingPong(userInput);
		for (i = 0; i<=range.length; i++){
      	$("ul#output").append("<li >"+range[i]+"</li>");
      }

    var userInput = $("#input").val("");
	});
});
