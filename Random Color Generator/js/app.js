
const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

 // Whenever we click on the click button then it automatically copy the randomCode with the help of the below lines of code. . .
    navigator.clipboard.writeText(randomCode);
}


//Event Call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// Init Call
getColor(); 