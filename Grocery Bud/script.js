let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let container = document.querySelector(".grocery-list");
let clearBtn = document.querySelector(".clear");
let alert = document.querySelector(".alert");

// Add Item
submit.addEventListener("click", function (e) {
  e.preventDefault();

  let article = document.createElement("article");
  article.classList.add("grocery-item");

  article.innerHTML = `
  <p class="title">${input.value}</p>
            <div class="btn-conatiner">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
  `;

  let trimValue = input.value.trim(); // trim the value

  // If value is not valid then return
  if (trimValue == "") {
    alert.innerText = "Please Enter Valid Value. . .";
    setTimeout(() => {
      alert.remove();
    }, 2000);
    return;
  } 
  else {
    container.append(article);
    clearBtn.style.visibility = "visible";

    // Display
    setTimeout(() => {
      alert.innerText = "Item added Successfully.";
    }, 1000);

    setTimeout(() => {
      alert.remove();
    }, 2000);

    input.value = "";
  }
});
