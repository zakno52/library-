let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPage = document.getElementById("page");
let bookSub = document.getElementById("submit");
let newBook = document.getElementById("newBook");
let dialog = document.getElementById("dialog");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

const myLibrary = [];

// Ensure your array (data storage) and DOM manipulation (display logic) are independent.
// Example: Update the array when you add/remove books, then call the display function to refresh the screen.

function Book(title, author, page) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  // 3 Adds the object to the myLibrary array.
  myLibrary.push(this);
  let c = 0;
  newBook.after(myLibrary[c].title, myLibrary[c].author, myLibrary[c].page);
  c += 1;
}
bookSub.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPage.value);
});
function addBookToLibrary(title, author, page) {
  // 1 Takes input (like title, author, etc.).
  // 2 Creates a new book object.
  let createBook = new Book(title, author, page);

  console.log(myLibrary);
}

// What you need to do:
// Write a function to loop through the myLibrary array.
// For each book:
//     Create HTML elements (e.g., a table row or card) to display its details.
//     Append these elements to the DOM.

// HTML
// Add a "New Book" Form
// What you need to do:
//     Create a button that opens a form (e.g., modal, sidebar).
//     The form should let users enter book details like title, author, pages, and read status.
//     Use event.preventDefault() to stop the default form submission behavior.
//     After submitting, call addBookToLibrary to add the book and refresh the display.

// Add Buttons for Each Book

//     What you need to do:
//         Remove Button: Each book should have a button to delete it. Use a data attribute (e.g., data-index) to link the DOM element with the correct book in the array. Remove the book from the array and refresh the display.
//         Toggle Read Status Button: Add a button to toggle the read status of a book. Create a function to handle this action.
//     Why this is important: These actions improve user interaction and functionality.
