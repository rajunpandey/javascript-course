//confirm() displays a message to the user in a pop-up window and waits for the user to click either the OK or Cancel button.
// The function returns true if the user clicks OK and false if the user clicks Cancel. Based on the value returned by the function, you can perform different actions.

let result = confirm("Do you want to continue?"); // displays a message to the user in a pop-up window
if (result) {
  alert("You clicked OK!"); // displays "You clicked OK!" in a pop-up window
} else {
  alert("You clicked Cancel!"); // displays "You clicked Cancel!" in a pop-up window
}