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
document.getElementById('findBook').addEventListener('click', function() {
    const input = document.getElementById('input').value.trim();
    if (!input) {
        alert("Please enter a search term");
        return;
    }
    const key = 'AIzaSyBnWy5a93_RlQHTaQIcLeCcra2ThvqTO4o'; 
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(input)}&key=${key}`;
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
            if (!jsonData.items) {
                resultDiv.innerHTML = "No books found.";
                return;
            }
            jsonData.items.forEach(item => {
                const bookObj = makeBook(item); 
                resultDiv.innerHTML += `
                <div class="bookContainer">
                    <div class="image">
                        ${bookObj.thumbnail ? `<img src="${bookObj.thumbnail}" />` : ""}
                    </div>
                    <div class="bookInfo">
                        <br><strong>Title:</strong> ${bookObj.title}
                        <br><strong>Authors:</strong> ${bookObj.author}
                        <br><strong>Published:</strong> ${bookObj.year}
                        <br><strong>Description:</strong> ${bookObj.description || "No description"}
                        <br><strong>Genres:</strong> ${bookObj.genres && bookObj.genres.length ? bookObj.genres.join(", ") : "N/A"}
                        <br><strong>Maturity:</strong> ${bookObj.mRating}
                    </div>
                    </div>
                    <button class="addBook" data-id="${item.id}">Add to My List</button>
                    <br><br>
                    <hr>
                    <br>
                `;
            });
document.querySelectorAll(".addBook").forEach(btn => {
    btn.addEventListener("click", function() {
        const bookId = this.getAttribute("data-id");
        const bookFromAPI = jsonData.items.find(b => b.id === bookId);
        const bookToAdd = makeBook(bookFromAPI);
        addBook(bookToAdd); 
    });
});
 });
});
function makeBook(book) {
    return {
        id: book.id,
        title: book.volumeInfo.title || "Untitled",
        author: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown",
        year: book.volumeInfo.publishedDate || "N/A",
        description: book.volumeInfo.description || "",
        genres: book.volumeInfo.categories || [],
        mRating: book.volumeInfo.maturityRating || "N/A",
        thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
    };
}
function addBook(book) {
    let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    if (bookList.find(b => b.id === book.id)) {
        alert("Book already in your list!");
        return;
    }
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    alert("Book added to your list!");
}
