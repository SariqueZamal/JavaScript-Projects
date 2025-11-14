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

// If value is not valid then return
  if (trimValue == "") {
    alert.innerText = "Please Enter Valid Value. . .";
    input.value = "";
    setTimeout(() => {
      alert.innerText = "";
    }, 1000);
    return;
  } else if (editflag == false) {
    container.append(article);
    count++;

    clearBtn.style.visibility = "visible";

    // Display
    alert.innerText = "Item added Successfully.";

    setTimeout(() => {
      alert.innerText = "";
    }, 1000);
  } else {
    Children.children[0].innerText = trimValue;
    alert.innerText = "Item edited Successfully.";
    submit.innerText = "Submit";

    setTimeout(() => {
      alert.innerText = "";
    }, 1000);
  }
  input.value = "";
}
