let getColor = () => {
    // Hex Code
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    console.log(randomNumber, randomCode)
}
// initial call
getColor()