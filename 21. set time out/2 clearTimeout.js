//If you change your mind and want to cancel the execution of the function before the specified delay has passed,
// you can use the clearTimeout function. Here's how it works:

var timeoutID = setTimeout(function() {
    alert('This message will never be displayed.');
  }, 1000);
  clearTimeout(timeoutID);

  //In this example, the setTimeout function is called to display an alert after 1000 milliseconds.
  // However, before the 1000 milliseconds have passed, the clearTimeout function is called to cancel the execution of the function.
  // As a result, the alert message will never be displayed.