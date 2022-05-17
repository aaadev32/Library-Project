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

function deleteBook(dataAttributeIndex){
    myLibrary.splice(dataAttributeIndex, 1);
    //while(document.querySelectorAll(dataAttributeIndex)){

    //}
}

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
    let createButton = document.createElement('button');
    let createTableRow = document.createElement('tr');
    let newRowId = document.getElementById(`table-row-${j}`)

    removeChildren(table);

    for (let i = 0; i < myLibrary.length; i++) {

        j = 0;
        let obj = myLibrary[i];

        if (j == 0) {
            //creates table head and appends keys to it
            let newTableRow = createTableRow;
            newTableRow.dataset.index = `${i}`;
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
                let newButton = createButton;
                newButton.dataset.index = `${i}`;
                //let index = `${i}`;
                newButton.onClick = deleteBook(newButton.dataset.index);// this deletes properly but somehow without even clicking the button!!!
                newButton.textContent = `Delete Book`;
                buttonClone = newButton.cloneNode(true);
                rowClone.appendChild(buttonClone);
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

//TODO: line 92 notes
//TODO: Add a button on each book’s display to change its read status. 
//TODO: do some simple styling and be finished!