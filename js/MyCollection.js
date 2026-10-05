//Navigation JQuery ->https://github.com/TuxChad/hamburger-menu
const menu = document.querySelector(".menu");
const nav_menu = document.querySelector(".nav-menu");

menu.addEventListener("click",()=>{
  menu.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  nav_menu.classList.remove("active");
}));

//JQuery Minimal-To-do-List-Task-Manager-App-Using-jQuery-Local-Storage -> jqueryscript.net
const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
const container = document.getElementById("collectionContainer");
function showCollection() {
    container.innerHTML = "";
    if (bookList.length === 0) {
        container.innerHTML = "<p>No books in your collection yet.</p>";
        return;
    }
    bookList.forEach((book, index) => { 
        const div = document.createElement("div");
        div.classList.add("bookItem");
        div.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Description:</strong><br>${book.description}</p>
            <p><strong>Genres:</strong> ${Array.isArray(book.genres) && book.genres.length > 0 ? book.genres.join(", ") : "N/A"}</p>
            <p><strong>Maturity Rating:</strong> ${book.maturityRating || "N/A"}</p>
            <button class="removeBook" data-index="${index}">Remove</button>
            <hr>
        `;
        container.appendChild(div);
    });
    const removeButtons = container.querySelectorAll(".removeBook");
    removeButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"));
            bookList.splice(index, 1);                  
            localStorage.setItem("bookList", JSON.stringify(bookList));
            showCollection();                         
        });
    });
}
showCollection();



