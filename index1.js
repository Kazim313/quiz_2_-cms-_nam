// Sample input array
const persons = [
    {
      id: 1,
      personName: "Raza",
      personAge: "23",
      personIncome: "2000000"
    },
    {
      id: 2,
      personName: "Ali",
      personAge: "23",
      personIncome: "3000000"
    }
  ];
  
  // Function to print person information
  function printPersonInfo(person) {
    console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
  }
  
  // Loop through the array and print information
  for (const person of persons) {
    printPersonInfo(person);
  }
  