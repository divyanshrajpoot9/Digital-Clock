# Digital-Clock
### Hosted Link : https://divyanshrajpoot9.github.io/Digital-Clock/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.
  
### This JavaScript code is designed to create a simple digital clock that displays the current time on a webpage.
// Get references to HTML elements with specific IDs
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
```

These lines of code retrieve references to HTML elements with the IDs "hour," "minutes," "seconds," and "ampm." These elements are assumed to exist in the HTML structure of the webpage.

```javascript
// Function to update the clock
function updateClock() {
  // Get current time values using the Date object
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // Convert 24-hour format to 12-hour format
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  // Add leading zeros to single-digit hours, minutes, and seconds
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update the text content of the HTML elements with the formatted time values
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  // Schedule the updateClock function to be called again after 1000 milliseconds (1 second)
  setTimeout(() => {
    updateClock();
  }, 1000);
}

// Initial call to updateClock to display the current time
updateClock();


1. The `updateClock` function is defined to update the displayed time and schedule itself to be called again after 1000 milliseconds (1 second).

2. The current hour, minute, and second are obtained using the `getHours`, `getMinutes`, and `getSeconds` methods of the `Date` object, respectively.

3. The 24-hour format is converted to a 12-hour format, and the AM/PM indicator is set accordingly.

4. Leading zeros are added to the hour, minute, and second values if they are single digits.

5. The text content of the HTML elements referenced earlier is updated with the formatted time values.

6. The `setTimeout` function is used to call the `updateClock` function after a delay of 1000 milliseconds, creating a continuous update every second.

7. The `updateClock()` function is initially called to display the current time when the page loads.
![image](https://github.com/divyanshrajpoot9/Digital-Clock/assets/114856467/67ee8cb8-aaac-42cb-9924-405854f8d85c)

