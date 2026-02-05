let paragraph = document.querySelector("p");
let decBtn = document.querySelector("#decrease");
let incBtn = document.querySelector("#increase");
let reset = document.querySelector("#reset");

let count = 0;
// Increase function
incBtn.addEventListener("click", function () {
count++;
paragraph.innerText = count;
});

// reset function
reset.addEventListener("click", function () {
  count = 0;
  paragraph.innerText = count;
});

// Decrease function
decBtn.addEventListener("click", function () {
  count--;
  paragraph.innerText = count;
});
