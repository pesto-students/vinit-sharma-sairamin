const mathOperations = require("./calculator.js"); //iporting file

//writing test cases using jest
describe("Calculator test", () => {
    test("add 1 + 2 should be 3", () => {          //first test case
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test("substraction of 4 - 2 should be 10", () => { //second test case
        expect(mathOperations.diff(4, 2)).toBe(2);
    });

    test("product of 2 * 8 should be 16", () => {
        expect(mathOperations.product(2, 8)).toBe(16); //third test case
    });
});



//output 
// Calculator test
//     √ add 1 + 2 should be 3 (4 ms)
//     √ substraction of 4 - 2 should be 10 (1 ms)
//     √ product of 2 * 8 should be 16 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.689 s, estimated 1 s
