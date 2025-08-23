// Select popup elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbtn = document.querySelector("#popup-btn");
var cancelpop = document.querySelector("#cancel-popup");

// Show popup
addpopupbtn.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup
cancelpop.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select form elements
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Validation
    if (booktitleinput.value.trim() === "" || bookauthorinput.value.trim() === "") {
        alert("Please fill in both Title and Author fields.");
        return;
    }

    // Create book container
    var div = document.createElement("div");
    div.classList.add("book-container");

    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
    `;

    // Add Delete button with event listener
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        div.remove();
    });

    div.appendChild(deleteBtn);
    container.appendChild(div);

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
