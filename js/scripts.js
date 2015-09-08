var factorial = function(number) {

  var result = 1;
  for (var counter = number; counter > 0; counter -=1) {

  result = result*counter;
  }

  return result;
};


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());

    var total = factorial(number);
    $(".factorialized").text(total);

    event.preventDefault();

  });
});
