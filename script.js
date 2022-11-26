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
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class","imgContainer");
    const pageOneImage = document.createElement("img");
    pageOneImage.src = "baby1.jpg";
    imgContainer.appendChild(pageOneImage);
    displayContainer.appendChild(imgContainer);
    const nextBtn2 = document.createElement("button");
    nextBtn2.innerHTML = "Continue";
    displayContainer.appendChild(nextBtn2);
    nextBtn2.addEventListener("click", nextPage2);
}

function nextPage2() {
    removeChildren();
    const pageTwoMessage = document.createElement("div");
    pageTwoMessage.innerHTML = "Fast forward 24 years - I qualified as a dentist!";
    displayContainer.appendChild(pageTwoMessage);
    const pageTwoImage = document.createElement("img");
    pageTwoImage.src = "grad.jpg";
    displayContainer.appendChild(pageTwoImage);
    const nextBtn3 = document.createElement("button");
    nextBtn3.innerHTML = "Continue";
    displayContainer.appendChild(nextBtn3);
    nextBtn3.addEventListener("click", nextPage3);
}

function nextPage3() {
    removeChildren();
    const pageThreeMessage = document.createElement("div");
    pageThreeMessage.innerHTML = "During COVID-19, I discovered how fun coding can be (Not so much for my cat!) </br> I've also realised that I wanted more flexibility with my work and career.";
    displayContainer.appendChild(pageThreeMessage);
    const pageThreeImage = document.createElement("img");
    pageThreeImage.src = "laptop.jpeg";
    displayContainer.appendChild(pageThreeImage);
    const nextBtn4 = document.createElement("button");
    nextBtn4.innerHTML = "Continue";
    displayContainer.appendChild(nextBtn4);
    nextBtn4.addEventListener("click", nextPage4);
}

function nextPage4() {
    removeChildren();
    const pageFourMessage = document.createElement("div");
    pageFourMessage.innerHTML = "These are some of the projects I've been working on:";
    displayContainer.appendChild(pageFourMessage);
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id","projectContainer");
    const projectOneContainer = document.createElement("div");
    const projectOneTitle = document.createElement("p");
    const projectOneLink = document.createElement("a");
    const projectOneImg = document.createElement("img");
    projectOneImg.src = "Project1.png"
    projectOneTitle.innerHTML = "Hobby Page";
    projectOneLink.href
    anchorTag.appendChild(projectOneLink);
    projectOneContainer.appendChild(projectOneTitle);
    projectOneContainer.appendChild(projectOneImg);
    projectContainer.appendChild(projectOneContainer);
    displayContainer.appendChild(projectContainer);
    

}