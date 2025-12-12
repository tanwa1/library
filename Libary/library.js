const appendContainer = document.getElementById("libraryContainer");
const tableLists = document.getElementById("tableLists");


const myLibrary = [];

function Book(title, author, pages, readStatus, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;

}

function addBookToLibrary(title, author, pages, readStatus) {

    const book = new Book(title, author, pages, readStatus, crypto.randomUUID());

    myLibrary.push(book)
}

addBookToLibrary('romance of three kingdoms', 'luo guanzhong', 600, 'read');
addBookToLibrary('80,000 Hours', 'Chris Pratt', 150, 'not read');
addBookToLibrary('Java Practical Programming', 'Perry Xiao', 400, 'not read');
addBookToLibrary('Bible', 'Prophets', 600, 'not read');


function loopLibrary() {

    for (let i = 0; i < myLibrary.length; i++) {
        
        const dataBook = ['title', 'author', 'pages', 'readStatus', 'id'];
    
        const tableRows = document.createElement('tr');
        
        dataBook.forEach((element) => {
            const tableData = document.createElement('td')
            
            tableData.textContent = myLibrary[i][element];
            tableRows.appendChild(tableData);
            tableLists.appendChild(tableRows);
            
        });
    }
}

loopLibrary();