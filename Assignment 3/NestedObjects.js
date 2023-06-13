function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  const person = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "City",
      country: "Country"
    }
  };
  
  const result = extractNameAndStreet(person);
  console.log(result);
    