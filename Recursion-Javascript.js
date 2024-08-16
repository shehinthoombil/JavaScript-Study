// Recursive Factorial
function Factorial(n){
    if(n==1){
        return 1
    }
    return n*Factorial(n - 1);
}
console.log(Factorial(5))

 // Recursive Fibonacci
 function Fibonacci(n) {
    if(n == 0 || n == 1){
        return n;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
 }
 console.log(Fibonacci(6))