// add an event listener that listens for a "click" and gives an alert
document.querySelector("button").addEventListener("click", () => {
  console.log("You clicked me!");
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("button").addEventListener("mouseover", event => {
  event.target.style.color = "red";
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
