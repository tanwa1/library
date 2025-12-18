const dialog = document.querySelector("dialog");
const addBook = document.getElementById("addbook");
const closeButton = document.querySelector("dialog button");

const cardContainer = document.getElementById("cardContainer");

//   width: 20%;
//   height: 50%;
//   margin: 1rem;
//   padding: 1rem;
//   border-radius: 1rem;
//   gap: 5rem;
//   background-color: antiquewhite;

// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const pages = document.getElementById("pages");
// const readStatus = document.getElementById("Readstatus");
// const bookId = document.getElementById("bookId");

const myLibrary = [];

function Book(title, author, pages, readStatus, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;

}

function addBookToLibrary(titles, author, pages, readStatus) {

    const book = new Book(titles, author, pages, readStatus, crypto.randomUUID());

    myLibrary.push(book)
}



function loopLibrary() {
    cardContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {

        const dataBook = ['title', 'author', 'pages', 'readStatus', 'id'];

        const card = document.createElement('div');
        card.style.width = '20%';
        card.style.margin = '1rem';
        card.style.padding = '1rem';
        card.style.borderRadius = '1rem';
        card.style.backgroundColor = 'antiquewhite';

        dataBook.forEach((element) => {
            const cardContent = document.createElement('div')

            cardContent.textContent = myLibrary[i][element];
            card.appendChild(cardContent);
            cardContainer.appendChild(card);
        });
    }
}

// loopLibrary();

addBook.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});


const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {

    const getTitle = document.getElementById("titleName").value;
    const getAuthor = document.getElementById("authorName").value;
    const getPage = document.getElementById("numberAmount").value;
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value;

    addBookToLibrary(getTitle, getAuthor, getPage, readStatus);
    loopLibrary();
    e.preventDefault();
})