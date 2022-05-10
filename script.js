let myLibrary = {
    title: 'test',
    author: 'test',
    pages: 123,
    read: 'No'
};
let newBook = null;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = Book(title, author, pages, read);
    myLibrary.push.newBook;
    //let Book1 = Object.Create(Book);
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
        addBookToLibrary(title, author, pages, read);
        return 1;
    }
    
    document.getElementById('close-popup').id = 'open-popup';
    document.getElementById('add-book').textContent = 'Submit';
    for(i = 0; i < length; i++) {
        bookForm[i].style.display = 'block';
    }

}


function closePopup() {
    let bookForm = document.getElementsByClassName('input-label');
    let length = bookForm.length;

    document.getElementById('open-popup').id = 'close-popup';
    document.getElementById('add-book').textContent = 'Add Book';
    document.getElementsByClassName('input-label').display = 'none'
    for(i = 0; i < length; i++) {
        bookForm[i].style.display = 'none';
    }
    console.log('bye');
}


//ended session by adding addNewBook() on line 44. figure out if it is properly adding books to the myLibrary object (havent tested) 5/9/22