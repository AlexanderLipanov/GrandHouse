
"use strict";

let mail = {
    name: "",
    date: "",
    comment: "",
    number: "",
    time: "",
}


let policyCheckbox = document.getElementById("policy-checkbox");
let sendFormButton = document.getElementById("send-form-button");

sendFormButton.disabled = true;
function toggleCheckbox() {
    sendFormButton.disabled = !policyCheckbox.checked;
    
    console.log(policyCheckbox.checked, "Checked");
    console.log(sendFormButton.disabled, "Disabled");
}

let inputName = document.getElementById("name-input");
let inputDate = document.getElementById("date-input");
let inputComment = document.getElementById("comment-input");
let inputNumber = document.getElementById("number-input");
let inputTime = document.getElementById("time-input");

function inputNameChange() {
    mail.name = inputName.value;
}

function inputDateChange() {
    mail.date = inputDate.value;
}

function inputCommentChange() {
    mail.comment = inputComment.value;
}

function inputNumberChange() {
    mail.number = inputNumber.value;
}

function inputTimeChange() {    
    mail.time = inputTime.value;
}

function sendMail() {
    
    console.log(mail);
}