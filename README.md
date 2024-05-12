# qa_auto_3.1

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Test suites overview](#test-suites-overview)
5. [Running tests](#running-tests)
6. [Coverage measurement](#coverage-measurement)


## Description 📝

This project includes the `calculateBonus` JavaScript function. It takes two numerical inputs, sums them, and evaluates the total. If the sum is 50 or less, it returns this value; if the sum exceeds 50, it caps the return value at 50. This function is tested with Jest to ensure it performs as expected.

This project is part of the homework assignments for Module 3 "Unit Tests" of a course on JavaScript test automation.

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

## Test suites overview 🔍

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


## Running tests 🧪

Test the functionality of the `calculateBonus` function with:
```
npm test
```
OR
```
npx jest
```

## Coverage measurement 📊

![image](https://github.com/shinkai-tester/qa_auto_3.1/assets/57576102/10244595-63af-4ba8-98ed-9106b27c7890)


Coverage measurement in testing evaluates how much of your code is executed while the tests run. Here's what each metric means:

- **Lines**: % of code lines executed during the tests;
- **Functions**: % of functions that are called during the tests;
- **Branches**: % of conditional code branches (like in `if` statements) that are executed.


### Running coverage

To generate a coverage report, `--coverage` flag can be added to Jest test command:

```
npx jest --coverage
```
Alternatively, since `"test:coverage": "jest --coverage"` is configured in `package.json`, you can also run the coverage using:

```
npm run test:coverage
```

