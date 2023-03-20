
"use strict";

let policyCheckbox = document.getElementById("policy-checkbox");
let sendFormButton = document.getElementById("send");

sendFormButton.disabled = true;
function toggleCheckbox() {
    sendFormButton.disabled = !policyCheckbox.checked;
    if(!sendFormButton.disabled) {
        sendFormButton.style.color = "black";
    } else {
        sendFormButton.style.color = "gray";
    }
}
