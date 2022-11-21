console.log("JavaScript is Working!");
const displayContainer = document.getElementById("displayContainer");
const div = document.createElement("div");
div.innerHTML = "Hello there, </br> What's your name?";
displayContainer.appendChild(div);
const input = document.createElement("input");
displayContainer.appendChild(input);
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type","submit");
submitBtn.innerHTML = "Submit";
displayContainer.appendChild(submitBtn);

function removeChildren() {
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    }
}
function nameSubmit() {
    removeChildren();
    const welcomeMessage = document.createElement("div");
    console.log(input.value);
    welcomeMessage.innerHTML = "Hello " + input.value + " &#128075;</br> Welcome to my website - I'm Mina!";
    displayContainer.appendChild(welcomeMessage);
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Click here to find out more";
    displayContainer.appendChild(nextBtn);
    nextBtn.addEventListener("click", nextPage);
}

submitBtn.addEventListener("click",nameSubmit);

function nextPage() {
    removeChildren();
    const pageOneMessage = document.createElement("div");
    pageOneMessage.innerHTML = "I was born in Hong Kong many moons ago (guess which one is me)";
    displayContainer.appendChild(pageOneMessage);
    const pageOneImage = document.createElement("img");
    pageOneImage.src = "baby1.jpg";
    displayContainer.appendChild(pageOneImage);
    const nextBtn2 = document.createElement("button");
    nextBtn2.innerHTML = "Continue";
    displayContainer.appendChild(nextBtn2);
    nextBtn2.addEventListener("click", nextPage2);
}

function nextPage2() {
    removeChildren();
    const pageTwoMessage = document.createElement("div");
    pageOneMessage.innerHTML = "Fast forward 24 years - I became a dentist!";
    displayContainer.appendChild(pageOneMessage);
    const pageOneImage = document.createElement("img");
    pageOneImage.src = "baby1.jpg";
    displayContainer.appendChild(pageOneImage);
    const nextBtn2 = document.createElement("button");
    nextBtn2.innerHTML = "Continue";
    displayContainer.appendChild(nextBtn2);
    nextBtn2.addEventListener("click", nextPage2);
}

