# qa_auto_3.1

## Description 📝

This project includes the `calculateBonus` JavaScript function. It takes two numerical inputs, sums them, and evaluates the total. If the sum is 50 or less, it returns this value; if the sum exceeds 50, it caps the return value at 50. This function is tested with Jest to ensure it performs as expected.

This project is part of the homework assignment for Module 3.1 "Unit Tests. Jest Introduction" of a course on JavaScript test automation.

## Installation 🛠️

1. **Clone this repository**

   Run the following command in your terminal:
     ```bash
     git clone https://github.com/shinkai-tester/qa_auto_3.1.git
     ```

3. **Navigate to the project directory**

## Setup 🚀

**Install dependencies:**
- Ensure that Node.js is installed on your machine. If not, download and install it from [Node.js official website](https://nodejs.org/).
- Install all required dependencies by running:
```bash
npm install
```

## Test Suites Overview 🔍

- **Basic functionality**
  - Tests that the function returns the correct sum when the combined value of inputs is less than or equal to 50, and caps the value at 50 when the sum exceeds 50.

- **Handling other input types**
  - Verifies that the function can accurately process inputs as floating numbers or strings and still return correct results.

- **Test zero values**
  - Ensures that the function correctly handles cases where one or both input values are zero.

- **Test negative values**
  - Checks that negative inputs are correctly summed or adjusted, ensuring the function can handle negative scenarios appropriately.

- **Test boundary values**
  - Focuses on edge cases close to the threshold (like sums of 49, 50, and 51) to verify the function behaves as expected in boundary conditions.


## Running Tests 🧪

Test the functionality of the `calculateBonus` function with:
```
npm test
```
OR
```
npx jest
```
