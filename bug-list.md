# Bug List Programmering 1

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. Problem: The user should only be able to input ONE number in each available/empty box.

2. Problem: Remove the user's previous input so the box is empty.

Fixed 17/4: If the user clicks on a button and doesn't write anything in the prompt, then presses "ok", the array will be updated with an empty string and the box will look empty.

If the user clicks on a button and doesn't write anything in the prompt, then presses "cancel", the array will be updated with "null" and the box will look empty.

3. Problem: If the user changes their input, the new input should replace the old one.

Fixed 17/4: The user's input will be updated in the array every time a button is clicked.

4. Problem: The user should only be able to input a number bewtween 1-9.

5. Problem: The user should not be able to click on the boxes with premade numbers. It should be clear which box is clickable even after a number have been added to an empty box.

Fixed 26/3: Even though all the number boxes uses the button tag, I've used CSS to make the premade number boxes look like they can't be clicked to not confuse the user. For the available/empty boxes, I have added a different background color to the button when the user hovers over it to show a clear contrast.

6. Problem: The program needs to show the user if their input is right/wrong, either immediately or later on.

I came up with a potential solution 23/3 that I haven't tried yet: There could be a "validate" button that the user can click on to see if what they've entered is correct. The program will go through the "empty" boxes that are now filled and cross-check them with the correct answers. If a number is wrong, the program will state which number/box it is.

7. Problem: This is a problem that was extra difficult because I had to think about how to fix several things at the same time. Look at the solution to get a more in-depth look of the problem. In short - The program needed to store the user's input in the userAnswers array in the correct index. I had to find a way to connect the button that was clicked with the correct index in the userAnswers array. The userAnswers also needed to have the same index as the answers array to make it easier to cross-check the answers later on.

Fixed 17/4: The buttons id name corresponds with the (correct) answers array and the userAnswers array. When the user presses a button, the program stores the id of the button in the currentID variable. The user gets a prompt to fill in their answer, which will be stored in the currentAnswer variable. The userAnswers array will be updated with the data that is stored in the currentAnswer variable, and it will find the correct index because of the currentID variable that has the (currently) correct index number of the array. The number box will then be updated with the currentAnswer. The program will go through these steps each time a button is clicked.

8. Problem: The program should notice when all the boxes are filled with the correct answers and tell/show the user that it's finished.

# Bug List Webbutveckling 1