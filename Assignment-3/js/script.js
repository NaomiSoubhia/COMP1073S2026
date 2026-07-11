const name = "Naomi Soubhia Doi";
const studentId = "200645137";

let naomiInfos =  document.getElementById("naomiInfos");
naomiInfos.textContent = `Name: ${name} | Student ID: ${studentId}`;


//Showing the drinks if the checkbox is selected
const softDrinkCheckbox = document.getElementById("softDrink");
const drinkOptions = document.getElementById("drinkOptions");

softDrinkCheckbox.addEventListener("change", function () {

    if (softDrinkCheckbox.checked) {
        drinkOptions.style.display = "block";
    } else {
        drinkOptions.style.display = "none";
    }

});




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

    //Customer Name needs to have 2 characters or more 
    const customerName = document
        .getElementById("customerName")
        .value
        .trim();

    if (customerName.length < 2) {
        alert("Customer name must contain at least 2 characters.");
        return;
    }

   //Customer Address needs to have 2 characters or more 
    const customerAddress = document
        .getElementById("customerAddress")
        .value
        .trim();
    if (customerAddress.length < 2) {
        alert("Customer name must contain at least 2 characters.");
        return;
    }

    //Phone needs to have 10 numbers
    const phone = document
        .getElementById("phone")
        .value
        .trim();

    const phonePattern = /^[0-9]{10}$/;

    //Check the pattern and show alert
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const toppings = document.querySelectorAll('input[name="toppings"]:checked');

    if (toppings.length < 2 || toppings.length > 5 ) {
        alert("Please select at least 2 toppings and no more than 5");
        return;
    }

}

