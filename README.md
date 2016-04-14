# Fibonacci Sequence Generator

Binet's algorithm is used to generate each number in the Fibonacci Sequence, up to length n (provided by the user). Computing each number in the sequence is O(1), since our algorithm uses mathematical operations and doesn't rely on calculating any other values in the sequence. It's a great way to find the value of fib(n) without using recursion.

Since we're displaying the entire sequence from fib(0) to fib(n), the total run time of our algorithm is O(n). We have to loop over each value from 0 to n, computing each number as we go.

## Resources

I used Jon Miles' tree view plugin to display the sequence:
https://github.com/jonmiles/bootstrap-treeview

I also used the decimalJS library to handle precision arithmetic during the Fibonacci computations:
http://mikemcl.github.io/decimal.js/
