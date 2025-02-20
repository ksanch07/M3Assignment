/* Larger or Smaller?
Usage: Use simple conditional statement
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal. */

let num1 = parseInt(prompt('Enter a number'));
let num2 = parseInt(prompt('Enter another number'));
if (num1 > num2) {
    document.write("The larger number is: " + num1);
} else if (num2 > num1) {
    document.write("The larger number is: " + num2);
} else {
    document.write("Both numbers are equal.");
}