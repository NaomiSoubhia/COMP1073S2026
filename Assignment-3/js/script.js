const name = "Naomi Soubhia Doi";
const studentId = "200645137";

let naomiInfos =  document.getElementById("naomiInfos");
naomiInfos.textContent = `Name: ${name} | Student ID: ${studentId}`;

const form = document.getElementById("pizzaForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {

    //Don't reload the page
    event.preventDefault();

    //true = all requirements in html are followed
    //false = something is wrong
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const customerName = document
        .getElementById("customerName")
        .value
        .trim();

    if (customerName.length < 2) {
        alert("Customer name must contain at least 2 characters.");
        return;
    }


    const customerAddress = document
        .getElementById("customerAddress")
        .value
        .trim();
    if (customerAddress.length < 2) {
        alert("Customer name must contain at least 2 characters.");
        return;
    }

    const phone = document
        .getElementById("phone")
        .value
        .trim();

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


}