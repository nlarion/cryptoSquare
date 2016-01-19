var stripText = function(message){
  message = message.toLowerCase();
  message = message.replace(/ /g,'');
  message = message.replace(/[^\w\s]/gi, '');
  return message;
};

var cryptoSquare = function(message){
  message = stripText(message);
  message = makeColumn(message);
  //do something to array to make the coded message.

  return message;
};

var columnCount =  function(message){
  //work goes here
  var length = message.length;
  var squareRoot = Math.sqrt(length);
  var column = Math.ceil(squareRoot);
  return parseInt(column);
}

var makeColumn = function(message){
  var arr = [];
  var str = message.split("");
  var col = columnCount(message);
  while ( str.length > 0 ){
    var combined = "";
    for(var i = 0; i < col; i++){
      if(str[0]){
        combined = combined.concat(str[0]);
        str.shift();
      }
    }
    arr.push(combined);
  }
  return arr;
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
