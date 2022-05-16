let testBook = {
    title: 'test', author: 'test', pages: 123, read: 'No'
};
let myLibrary = [testBook];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const table = document.getElementById('main-table');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    console.log(Book);
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
    let button = document.createElement('button');
    let createTableRow = document.createElement('tr');
    let newRowId = document.getElementById(`table-row-${j}`)


    for (let i = 0; i < myLibrary.length; i++) {

        j = 0;
        let obj = myLibrary[i];

        if (j == 0) {
            //creates table head and appends keys to it
            let newTableRow = createTableRow;
            newTableRow.id = `table-row-${i}`;
            table.appendChild(newTableRow);

            for (const [key, value] of Object.entries(obj)) {
                let newKeyNode = createTableHead;
                newKeyNode.textContent = key;
                let clone = newKeyNode.cloneNode(true);
                console.log(newKeyNode);
                newTableRow.appendChild(clone);
            }
            j++
        }

        //create new row for values and append them
        let newTableNode = createTableRow;
        newTableNode.id = `table-row-${i}`;
        console.log(newTableNode);
        table.appendChild(createTableRow);

        for (const [key, value] of Object.entries(obj)) {

            let newValueNode = createTableData;
            newValueNode.textContent = value;
            let clone = newValueNode.cloneNode(true);
            newTableNode.appendChild(clone);
        }
        j++
    }

    //displays book objects correctly now it just needs to be styled properly and remove button added.--------------------5/13/22
}

function popup() {
    let close = document.getElementById('close-popup');
    let open = document.getElementById('open-popup');
    let bookForm = document.getElementsByClassName('input-label');
    let length = bookForm.length;

    if (close == null) {
        closePopup();
        addBookToLibrary(title.value, author.value, pages.value, read.value);
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
    console.log('bye');
}
