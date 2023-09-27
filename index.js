function calculatePercentage(number, totalAmount) {
    if (totalAmount === 0) {
      return 0; // Avoid division by zero
    }
  
    const percentage = (number / totalAmount) * 100;
    return percentage;
  }
  
  // Example usage:
  const number = 25;
  const totalAmount = 100;
  const percentage = calculatePercentage(number, totalAmount);
  console.log(`The percentage is: ${percentage}%`);
  