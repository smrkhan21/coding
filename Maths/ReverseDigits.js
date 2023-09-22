/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:

-2^31 <= x <= 2^31 - 1

*/

function reverse(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Handle negative numbers separately
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x = Math.abs(x);
    }

    let reversed_x = 0;
    while (x > 0) {
        // Extract the last digit of x
        const digit = x % 10;
        x = Math.floor(x / 10);

        // Check for integer overflow
        if ((reversed_x * 10 + digit) > INT_MAX) {
            return 0;
        }

        // Append the digit to the reversed result
        reversed_x = reversed_x * 10 + digit;
    }

    return sign * reversed_x;
}

// Test cases
console.log(reverse(123));    // Output: 321
console.log(reverse(-123));   // Output: -321
console.log(reverse(120));    // Output: 21
console.log(reverse(2147483647));    // Output: 21