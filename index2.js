// Sample object
const person = {
    id: 1,
    personName: "Muhammad ",
    personAge: "23",
    personIncome: "2000000"
  };
  
  // Using a for...in loop
  console.log("Properties are below:");
  for (const property in person) {
    console.log(property);
  }
  
  // Using Object.keys() method
  console.log("\nProperties are below:");
  const properties = Object.keys(person);
  console.log(properties.join("\n"));
  