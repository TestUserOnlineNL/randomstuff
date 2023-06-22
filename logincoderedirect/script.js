console.clear();
//

const LOGINCODE = "123456";
const entryField = document.querySelector("#loginCode");

entryField.addEventListener("keyup", entryCodeCheck);

function entryCodeCheck(e) {
  const ec = e.target.value;
  //
  const messageBox = document.querySelector("#messageBox");
  const messageDiv = document.createElement("div");
  //
  if (ec === LOGINCODE && ec.length === 6) {
    window.location.replace("about:blank");
  } else if (ec !== LOGINCODE && ec.length > 6) {
    messageDiv.textContent = "Code rejected";
    messageDiv.classList.add("messageDiv");
    messageBox.appendChild(messageDiv);
    e.target.value = "";
  }
}