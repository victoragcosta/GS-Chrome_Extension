// Get buttons container
let page = document.getElementById("buttonDiv");

// List of colors
const kButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Display all color changing options buttons
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    // create a button with said color
    let button = document.createElement("button");
    button.style.backgroundColor = item;

    // Make it change color using storage
    button.addEventListener("click", function () {
      chrome.storage.sync.set({ color: item }, function () {
        console.log("color is " + item);
      });
    });

    // Add to page
    page.appendChild(button);
  }
}

constructOptions(kButtonColors);
