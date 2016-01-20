var stripText = function(message){
  message = message.toLowerCase();
  message = message.replace(/ /g,'');
  message = message.replace(/[^\w\s]/gi, '');
  return message;
};

var cryptoSquare = function(message){
  message = stripText(message);
  message = makeColumn(message);
  var bigArray = [];
  //do something to array to make the coded message.
  for(var i = 0; i < message.length; i++){
    var splitArray = message[i].split("");
    bigArray.push(splitArray);
  }
  var combined = "";
  while (bigArray[0].length > 0){

    for(var i = 0; i <bigArray.length; i++){
      if(bigArray[i][0]){
        combined = combined.concat(bigArray[i][0]);
        bigArray[i].shift();
      }
    }

  }
  return splitter(combined, 5).join(' ');

};

function splitter(str, n) {
    var ret = [];
    var i;
    var len;
    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }
    return ret
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
    var result = cryptoSquare(messageInput);

    $("#result").text(result);



    $("#result").show();
    event.preventDefault();
  });
});
