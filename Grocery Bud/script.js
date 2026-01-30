let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let container = document.querySelector(".grocery-list");
let clearBtn = document.querySelector(".clear");
let alert = document.querySelector(".alert");

let editflag = false; // Use for editing list
let count = 0; // use for Id

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
                <i class="fas fa-edit"></i>
                </button>
                <button type="button" clas="delete-btn">
                <i class="fas fa-trash"></i>
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
  } 
  // If need to create new item
  else if (editflag == false) {
    container.append(article);
    count++;

    clearBtn.style.visibility = "visible";

    // Display message on the top
    alert.innerText = "Item added Successfully.";

    setTimeout(() => {
      alert.innerText = "";
    }, 1000);
  } 
  // if we edit in the existing list
  else {
    editElement.children[0].innerText = trimValue;

    // Display message on the top
    alert.innerText = "Item edited Successfully.";
    submit.innerText = "Submit";

    setTimeout(() => {
      alert.innerText = "";
    }, 1000);
  }
  input.value = "";
}

container.addEventListener("click", edit);

function edit(e) {
  if (e.target.classList == "fas fa-edit") {
    input.focus();
    editElementID = e.target.id;
    editElement = e.currentTarget.children[editElementID];

    input.value = editElement.children[0].innerText;

    editflag = true;
    submit.innerText = "Edit";
  }
}
