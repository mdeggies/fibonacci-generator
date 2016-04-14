$(document).ready(init);

function init() {
  $('#warning').hide();
  $('#seqLength').change(checkValue);
  $('#calculate').on('click', calculateSeq);
}

function checkValue() {
  console.log($(this));
  var n = $(this).val();
  var max = $(this).attr('max');
  var min = $(this).attr('min');
  //Show warning if input is > 90
  if (n > 90) {
    $('#warning').show();
  } else {
    $('#warning').hide();
  }
  //Ensure user enters values within the range 1-301
  if (n > min) {
    if (n < max) {
      return n;
    } else $(this).val(max);
  } else $(this).val(min);
}

function calculateSeq() {
  var length = $('#seqLength').val();
  var sequence = fibonacciSeq(length);
  display(sequence);
}

function fib(i) {
  //Calculate the fibonacci number for input i
  //Uses Binet's algorithm and the decimal precision library
  //For accurate results
  var sqrt5 = new Decimal(5).sqrt();
  return Decimal.div(
    Decimal.sub(
      Decimal.pow(
        Decimal.add(sqrt5, 1),
        i
      ),
      Decimal.pow(
        Decimal.sub(1, sqrt5),
        i
      )
    ),
    Decimal.mul(
      Decimal.pow(
        2,
        i
      ),
      sqrt5
    )
  ).round().toString();
}

function fibonacciSeq(n) {
  var sequence = [];
  for (var i=0; i<n; i++) {
    var calculation = fib(i);
    sequence.push(calculation);
  }
  return sequence;
}

function display(sequence) {
  //Display the results in a tree format
  function createTree() {
    var data = [];
    for (var i=0; i<=sequence.length-1; i++) {
      var node = {text: "Fib("+i+") "+sequence[i]};
      data.push(node);
    }
    return data;
  }
  $('#tree').treeview({data: createTree()});
}
