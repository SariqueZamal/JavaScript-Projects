let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let container = document.querySelector(".grocery-list");
let clearBtn = document.querySelector(".clear");
let alert = document.querySelector(".alert");
let editflag = false;
let count = 0;

// Add Item
submit.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();

  let article = document.createElement("article");
  article.classList.add("grocery-item");

  let trimValue = input.value.trim(); // trim the value

  article.innerHTML = `
  <p class="title" id='${count}'>${trimValue}</p>
  <div class="btn-conatiner">
  <button type="button" class="edit-btn">
                <i class="fas fa-edit" id='${count}'></i>
                </button>
                <button type="button" clas="delete-btn">
                <i class="fas fa-trash" id='${count}'></i>
                </button>
                </div>
                `;

  let trimValue = input.value.trim(); // trim the value

  // If value is not valid then return
  if (trimValue == "") {
    alert.innerText = "Please Enter Valid Value. . .";
    input.value = "";
    setTimeout(() => {
      alert.innerText = "";
    }, 2000);
    return;
  } else {
    container.append(article);
    clearBtn.style.visibility = "visible";

    // Display
    setTimeout(() => {
      alert.innerText = "Item added Successfully.";
    }, 1000);

    setTimeout(() => {
      alert.innerText = "";
    }, 2000);
  }
  input.value = "";
});
