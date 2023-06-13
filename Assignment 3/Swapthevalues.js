function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  let x = 5;
  let y = 10;
  const swappedValues = swapValues(x, y);
  console.log(swappedValues);
  console.log(x); // Output: 10
  console.log(y); // Output: 5
    