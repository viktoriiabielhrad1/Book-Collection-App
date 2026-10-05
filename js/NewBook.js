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
$(document).ready(function() {
    let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    function displayBooks() {
        $('#collection').html(''); 
        bookList.forEach((book, index) => {
            $('#collection').append(`
                <div class="bookItem">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Year:</strong> ${book.year}</p>
                    <p><strong>Description:</strong> ${book.description}</p>
                    <p><strong>Genres:</strong> ${(book.genres || []).join(', ') || 'N/A'}</p>
                    <p><strong>Maturity Rating:</strong> ${book.maturityRating}</p>
                    <button class="removeBook" data-index="${index}">Remove</button>
                    <hr>
                </div>
            `);
        });
    }
    displayBooks();

    $('#bookForm').submit(function(event) {
        event.preventDefault();
        const title = $('#title').val().trim();
        const author = $('#author').val().trim();
        const year = $('#year').val().trim();
        const description = $('#description').val().trim();
        let genres = [];
        $('input[name="genre"]:checked').each(function() {
            genres.push($(this).val());
        });
        const maturityRating = $('input[name="mRating"]:checked').val();
        if (!title || !author || !year || !maturityRating) {
            alert("Please fill in all required fields.");
            return;
        }
        const book = { title, author, year, description, genres, maturityRating };
        bookList.push(book);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        alert(`Book "${title}" has been added to your collection!`);
        this.reset();
        displayBooks();
    });

    $(document).on('click', '.removeBook', function() {
        const index = $(this).data('index');
        bookList.splice(index, 1);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        displayBooks();
    });
});

