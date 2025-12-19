const dialog = document.querySelector("dialog");
const addBook = document.getElementById("addbook");
const closeButton = document.getElementById("closeButton");

const cardContainer = document.getElementById("cardContainer");

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

        const dataBook = [
            { label: 'Title: ', key: 'title' },
            { label: 'Author: ', key: 'author' },
            { label: 'Pages: ', key: 'pages' },
            { label: 'Read Status: ', key: 'readStatus' },
            { label: 'ID: ', key: 'id' }

        ];

        const card = document.createElement('div');
        card.style.width = '20%';
        card.style.margin = '1rem';
        card.style.padding = '1rem';
        card.style.borderRadius = '1rem';
        card.style.backgroundColor = 'antiquewhite';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.style.marginTop = '1rem';
        removeButton.setAttribute('data-id', myLibrary[i].id);
        
        removeButton.addEventListener('click', () => { 
            const bookId = removeButton.getAttribute('data-id');
            const bookIndex = myLibrary.findIndex(book => book.id === bookId);
            myLibrary.splice(bookIndex, 1);
            loopLibrary();
        }
);
        


        dataBook.forEach((element) => {
            const cardContent = document.createElement('div')

            cardContent.textContent = element.label + myLibrary[i][element.key];
            card.appendChild(cardContent);
            cardContainer.appendChild(card);
            card.appendChild(removeButton);    
        });
    }
}



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