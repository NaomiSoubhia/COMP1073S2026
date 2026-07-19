const infos = document.getElementById("naomiInfo");

infos.innerHTML = "Student: Naomi Soubhia Doi - 200645137";

//Key
const API_KEY = "AIzaSyAy8_o6Tpu9KIvHFD6Oaorerjtb6N2m77o";

//URL
const API_URL =`https://www.googleapis.com/books/v1/volumes?q=`;



// Search button element
const button = document.getElementById("searchBtn");


//Event listener for the button searchBooks
button.addEventListener("click",searchBooks);


// Function that connects to API
async function searchBooks(){

    //Get the title entered by the user
     let search = document.getElementById("bookSearch").value.trim();

     //If the user don't enter any title
      if(search === ""){
        //Alert to the user
        alert("Please enter a book name");
        return;
    
    }
    // Replace spaces with "+" and lower case
    search = search.replace(/\s+/g, "+").toLowerCase();

    // Try: Connection with the API + Search book title
    try{

        //Connection
        const response = await fetch(API_URL + search + "&key=" + API_KEY);

        //Just to test
        console.log(response);
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

    //Get the container html
    const container = document.getElementById("bookContainer");

    //Clear the previous cards
    container.innerHTML="";

    //Loop throw array books
    books.forEach(book => {
    // create new cards

    const info = book.volumeInfo;


    //Create card
    const card =document.createElement("div");
    card.classList.add("bookCard");
    

    //Book cover
    let image;

    if (info.imageLinks) {
        image = info.imageLinks.thumbnail;
    } else {
        image = "images/imgNotFound.png";
    }


    //Creating the html card passing the infos collected from the API
    card.innerHTML = `
        <img src="${image}">

        <h3> ${info.title} </h3>

        <p> <strong>Author:</strong>
        ${info.authors ? info.authors.join(", ") : "Unknown"}
        </p>

        <p> <strong>Category:</strong>
        ${info.categories ? info.categories[0] : "N/A"}
        </p>

        <p class="description">
        ${info.description ?
        info.description.substring(0,200) :
        "No description available"}
        </p>

        <a href="${info.previewLink}" target="_blank">
        Preview Book
        </a> `;

    //Append in the html
    container.appendChild(card);

});

}