let testBook = {
    book1: {title: 'test', author: 'test',pages: 123, read: 'No'}
};
let myLibrary = [testBook];

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

    myLibrary.push.newBook;
    console.log(newBook);
    console.log(myLibrary);
    i++;
}

function listBooks() {
    let i = 0;
    //Object.entries() may work as well
    for (i in myLibrary) {
        return title + ` by ${author}` + `, ${pages}`, + ` ${read}`;
    }

}

function popup() {
    let close = document.getElementById('close-popup');
    let open = document.getElementById('open-popup');
    let bookForm = document.getElementsByClassName('input-label');
    let length = bookForm.length;
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');

    //temporary(?) check for null to silence console errors
    if (close == null) {
        closePopup();
        addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').value);
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


//newBook succesfully gets turned into an object by new Book constructor and with the correct values but when pushed to myLibrary it doesnt get stored
//although by using the testBook variable which is constructed the same way and manually entering the object it gets stored properly
//  5/10/22 left off at addToLibrary function: find out how to push an object variable into an array