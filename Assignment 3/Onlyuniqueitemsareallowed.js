function removeDuplicates(numbers) {
    return [...new Set(numbers)];
  }
  const numbers = [1, 2, 3, 4, 2, 3, 5, 1, 6];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
    