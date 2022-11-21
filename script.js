console.log("JavaScript is Working!");
const displayContainer = document.getElementById("displayContainer");
const div = document.createElement("div");
div.innerHTML = "Hello there &#128075;, </br> What's your name?";
displayContainer.appendChild(div);
const input = document.createElement("input");
displayContainer.appendChild(input);
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type","submit");
submitBtn.innerHTML = "Submit";
displayContainer.appendChild(submitBtn);

function nameSubmit() {
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    }
    const welcomeMessage = document.createElement("div");
    console.log(input.value);
    welcomeMessage.innerHTML = "Hello " + input.value + "</br> Welcome to my website - I'm Mina!";
    displayContainer.appendChild(welcomeMessage);
}
submitBtn.addEventListener("click",nameSubmit);
