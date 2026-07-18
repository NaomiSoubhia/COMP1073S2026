const infos = document.getElementById("naomiInfo");

infos.innerHTML = "Student: Naomi Soubhia Doi - 200645137";


const API_KEY = "AIzaSyAy8_o6Tpu9KIvHFD6Oaorerjtb6N2m77o";

const url = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${API_KEY}`;