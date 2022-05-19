/*let testBook = {
    title: 'test', author: 'test', pages: 123, read: 'No'
};*/
let myLibrary = [];
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

function readNotRead(row) {
    if (document.getElementById(`td-read-${row}`).textContent == 'no') {
        document.getElementById(`td-read-${row}`).textContent = 'yes';
    } else {
        document.getElementById(`td-read-${row}`).textContent = 'no';
    }
    /*for (const [key, value] of Object.entries(library)) {
        if (key == read && value == 'no') {
            library.read = 'yes';
        } else if (key == read && value == 'yes') {
            library.read = 'no';
        } else if (key == read && value == undefined){
            library.read = 'yes';
        }
    } */

    /*if (document.getElementById(`td-read-${row}`).textContent == 'no') {
        Object.setPrototypeOf(read, 'yes');
    } else {
        Object.setPrototypeOf(read, 'no');
    } */
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
    let newRowId = document.getElementById(`table-row-${j}`)

    removeChildren(table);

    for (let i = 0; i < myLibrary.length; i++) {

        j = 0;
        let obj = myLibrary[i];

        if (i == 0) {
            //creates table head and appends keys to it
            let newTableRow = createTableRow;
            let rowClone = newTableRow.cloneNode();
            table.appendChild(rowClone);

            for (const [key, value] of Object.entries(obj)) {
                let newKey = createTableHead;
                newKey.textContent = key;
                let keyClone = newKey.cloneNode(true);
                rowClone.appendChild(keyClone);
            }
            j++
        }

        //creates a new row for values
        let newTableRow = createTableRow;
        newTableRow.dataset.index = `${i}`;
        rowClone = newTableRow.cloneNode(true);
        table.appendChild(rowClone);

        //values added and appended
        for (const [key, value] of Object.entries(obj)) {
            let newValue = createTableData;
            newValue.dataset.index = `${i}`;
            newValue.textContent = value;
            let valueClone = newValue.cloneNode(true);
            rowClone.appendChild(valueClone);

            //checks for final key to add button to the end
            if (key == 'read') {
                valueClone.textContent = 'no';
                valueClone.id = `td-read-${i}`;

                let newButton = createButton;
                newButton.dataset.index = `${i}`;
                newButton.textContent = `Delete Book`;
                buttonClone = newButton.cloneNode(true);
                buttonClone.onclick = function () { deleteBook(i), bookList() };
                rowClone.appendChild(buttonClone);

                let readButton = createButton;
                readButton.textContent = 'Read?';
                readButtonClone = readButton.cloneNode(true);
                readButtonClone.onclick = function () { readNotRead(i) }
                rowClone.appendChild(readButtonClone)
            }
        }



        j++

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

//TODO: Add a button on each book’s display to change its read status. 
//TODO: do some simple styling and be finished!