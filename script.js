const noBtn = document.querySelector("#no-btn");
const yesBtn = document.querySelector("#yes-btn");

const textBox = document.querySelector(".box-text");
const mainBox = document.querySelector(".box");

const message = document.createElement("span");
message.innerText = "See you this Saturday 😘";
message.style.fontWeight = "bold";
message.style.fontSize = "2rem";

noBtn.addEventListener("click", () => {
  alert("This action is not permitted.");
})

yesBtn.addEventListener("click", () => {
  textBox.replaceChildren();
  mainBox.removeChild(document.querySelector("h2"));
  mainBox.removeChild(document.querySelector(".buttons"));
  textBox.appendChild(message)
})


