let input = document.querySelector("input");
let submit = document.querySelector("button");
let container = document.querySelector("#container")


submit.addEventListener("click",function(){
    let trimValue=input.value.trim()
    if(trimValue==""){
        alert("please enter a value")
    } 
    // window.location.reload();
    container.append(`<div>
        <p>${trimValue}</p>
    </div>`)
});
