function fibonacci(n) {
    
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  

  const position = 10;
  const fibNumber = fibonacci(position);
  console.log(`The ${position}th Fibonacci number is ${fibNumber}`);
  