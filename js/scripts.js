var cryptoSquare = function(message){
  message = message.toLowerCase();
  message = message.replace(" ","");
  message = message.replace(/[^\w\s]/gi, '');
  return message;

};

$(document).ready(function() {
  $("form").submit(function(event) {
    var messageInput =$("input#message").val();
    var result = cryptoSquare("messageInput");

    $("#result").text(result);



    $("#result").show();
    event.preventDefault();
  });
});
