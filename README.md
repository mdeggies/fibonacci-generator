# Fibonacci Sequence Generator

Binet's algorithm is used to generate each number in the Fibonacci Sequence, up to length n (provided by the user). Computing each number in the sequence is O(1), since our algorithm doesn't rely on calculating the previous two values in the sequence- it's a great way to find the value of fib(n) without using recursion.

Since we're displaying the entire sequence from fib(0) to fib(n), the total run time of our algorithm is O(n)- we have to loop over each value from 0 to n, computing each number as we go.

## Resources

I used Jon Miles' tree view plugin to display the sequence:
https://github.com/jonmiles/bootstrap-treeview

I also used the decimalJS library to handle the precision arithmetic during the Fibonacci computations:
http://mikemcl.github.io/decimal.js/
