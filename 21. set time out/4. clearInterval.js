//If you want to stop the execution of the function that is being repeatedly executed using setInterval,
// you can use the clearInterval function. Here's how it works:

var intervalID = setInterval(function() {
    console.log('This message will be displayed every second.');
  }, 1000);
  
  clearInterval(intervalID);

  //In this example, the setInterval function is called to log a message to the console every second.
  // However, before the function can be executed more than once, the clearInterval function is called to stop the execution of the function.