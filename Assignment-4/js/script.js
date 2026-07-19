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

    //Get the title entered by the user
     const search = document.getElementById("bookSearch").value;

     //If the user don't enter any title
      if(search === ""){
        //Alert to the user
        alert("Please enter a book name");
        return;
    }

    // Try: Connection with the API + Search book title
    try{
        //Converts the JSON response into a JS object.
        const data = await response.json();
        //Call my function that receives an array (items)
         displayBooks(data.items);

    }

    catch(error){
        console.log(error);
    }

}

//Display data collected from the API
function displayBooks(books){

}