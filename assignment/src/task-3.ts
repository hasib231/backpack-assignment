function square(x: number): number {
    return x * x;
  }
  
  function double(x: number): number {
    return x * 2;
  }
  
  function addFive(x: number): number {
    return x + 5;
  }
  
  function composedFunction(x: number): number {
    return addFive(double(square(x)));
  }
  
  console.log(composedFunction(3)); 
  