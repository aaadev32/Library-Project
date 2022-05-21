let testBook = {
    title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, read: 'yes'
};

let myLibrary = [testBook];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const table = document.getElementById('main-table');

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function readNotRead(libIndex) {

    if (libIndex.read == 'yes') {
        libIndex.read = 'no';
    } else if (libIndex.read == null || libIndex.read == undefined) {
        libIndex.read = 'yes';
    } else {
        libIndex.read = 'yes';
    }

}

function deleteBook(index) {
    myLibrary.splice(index, 1);
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = {};
    newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
    i++;
}

function bookList() {
    let j = 0;
    let createTableHead = document.createElement('th');
    let createTableData = document.createElement('td');
    let createButton = document.createElement('button');
    let createTableRow = document.createElement('tr');
    let newRowId = document.getElementById(`table-row-${j}`);
    let createCard = document.createElement('div');


    removeChildren(table);

    for (let i = 0; i < myLibrary.length; i++) {

        let obj = myLibrary[i];


        //creates table head and appends keys to it
        let newTableRow = createTableRow;
        newTableRow.className = 'book-card-head';
        let newCard = createCard;
        newCard.className = 'card';
        let cardClone = newCard.cloneNode(true);
        table.appendChild(cardClone);
        let rowClone = newTableRow.cloneNode();
        cardClone.appendChild(rowClone);

        for (const [key, value] of Object.entries(obj)) {
            let newKey = createTableHead;
            newKey.textContent = key;
            let keyClone = newKey.cloneNode(true);
            rowClone.appendChild(keyClone);
        }

        //creates a new row for values
        newTableRow = createTableRow;
        newTableRow.className = `book-card-values`;
        rowClone = newTableRow.cloneNode(true);
        cardClone.appendChild(rowClone);

        //values added and appended
        for (const [key, value] of Object.entries(obj)) {
            let newValue = createTableData;
            newValue.dataset.index = `${i}`;
            newValue.textContent = value;
            let valueClone = newValue.cloneNode(true);
            rowClone.appendChild(valueClone);

            //checks for final key to add button to the end
            if (key == 'read') {
                valueClone.id = `td-read-${i}`;

                //create new row for buttons
                newTableRow = createTableRow;
                newTableRow.className = 'card-button';
                rowClone = newTableRow.cloneNode(true);
                cardClone.appendChild(rowClone);

                let newButton = createButton;
                newButton.dataset.index = `${i}`;
                newButton.textContent = `Delete Book`;
                buttonClone = newButton.cloneNode(true);
                buttonClone.onclick = function () { deleteBook(i), bookList() };
                rowClone.appendChild(buttonClone);


                let readButton = createButton;
                readButton.textContent = 'Read?';
                readButtonClone = readButton.cloneNode(true);
                readButtonClone.onclick = function () { readNotRead(myLibrary[i]), bookList() }
                rowClone.appendChild(readButtonClone)
            }
        }

    }


}

function popup() {
    let close = document.getElementById('close-popup');
    let open = document.getElementById('open-popup');
    let bookForm = document.getElementsByClassName('input-label');
    let length = bookForm.length;

    if (close == null) {
        closePopup();
        addBookToLibrary(title.value, author.value, pages.value);
        return 1;
    }

    document.getElementById('close-popup').id = 'open-popup';
    document.getElementById('add-book').textContent = 'Submit';
    for (i = 0; i < length; i++) {
        bookForm[i].style.display = 'block';
    }

}


function closePopup() {
    let bookForm = document.getElementsByClassName('input-label');
    let length = bookForm.length;

    document.getElementById('open-popup').id = 'close-popup';
    document.getElementById('add-book').textContent = 'Add Book';
    document.getElementsByClassName('input-label').display = 'none'
    for (i = 0; i < length; i++) {
        bookForm[i].style.display = 'none';
    }
}

//shows testbook on page start
bookList();
