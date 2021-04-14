// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
// 2.	Write the same function as above as an arrow function with a different name.
// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.
// 4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.
// a.	Write a new function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback function that will process the sliced element. 

// Inside the function, use the first two parameters to splice an element from the array.

// Inside the function, call the callback function and pass the spliced value into it.

// Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, an index number, and console.log into it. 

// For example: processSplicedValue(arrayName, 2, console.log);
// b.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
// c.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
// d.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
