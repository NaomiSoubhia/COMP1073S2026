const infos = document.getElementById("naomiInfo");

infos.innerHTML = "Student: Naomi Soubhia Doi - 200645137";

//Key
const API_KEY = "AIzaSyAy8_o6Tpu9KIvHFD6Oaorerjtb6N2m77o";

//URL
const API_URL =`https://www.googleapis.com/books/v1/volumes?q=`;

//fetch(API_URL + search + "&key=" + API_KEY);

// Search button element
const button = document.getElementById("searchBtn");


//Event listener for the button searchBooks
button.addEventListener("click",searchBooks);


// Function that connects to API
async function searchBooks(){

}