Book Collection App
-
A responsive client‑side web application for managing a personal book library. 
Built using HTML, CSS, JavaScript, jQuery, and LocalStorage, this project allows users to add books manually, 
search for books using the Google Books API, and store their collection directly in the browser.

Features
-
1. Add New Book (Manual Entry)
Users can add books through a custom form that includes:
Title, Author, Year, Description, Genres (checkboxes), Maturity Rating (radio buttons).

The form includes simple validation to ensure required fields are filled:

const maturityRating = $('input[name="mRating"]:checked').val();
if (!title || !author || !year || !maturityRating) {
    alert("Please fill in all required fields.");
    return;
}

When submitted, the book is saved to LocalStorage and displayed in My Collection.

My Collection Page
-
Books saved locally are stored in an array:

const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
The app dynamically renders the collection using DOM manipulation and jQuery.
Users can add items, remove items, and update the array - demonstrating practical use
of arrays and objects in JavaScript.

Find Book (Google Books API Integration)
-
Users can search for books online.
Each result includes an Add button - pressing it saves the selected book object into LocalStorage
and updates the collection array.

Event Handling
-
The project uses:
addEventListener for button clicks and form submission;
jQuery event methods (.on(), .click());
Input validation events;
Dynamic DOM updates triggered by user actions.

This demonstrates core client‑side interaction patterns.

Responsive Design
-
Wireframes were created for both desktop and mobile layouts, ensuring the app works smoothly across devices.

Technologies Used
-
HTML5, CSS3, JavaScript, jQuery, LocalStorage, Google Books API

Purpose
-
This project was developed as part of the Web Development Client-Side (COMPH1035) module. 
It demonstrates DOM manipulation, event handling, API integration, form validation,
and client-side data persistence using arrays and objects.
