let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPage = document.getElementById("page");
let bookSub = document.getElementById("submit");
let newBook = document.getElementById("newBook");
let dialog = document.getElementById("dialog");
let closeBtn = document.getElementById("close");
let readCheck = document.getElementById("read");
let bookShelf = document.getElementById("content");

let form = dialog.firstElementChild;

const myLibrary = [];
let c = 0;
let id = 0;

newBook.addEventListener("click", () => {
  dialog.showModal();
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPage.value = "";
});
closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

function Book(title, author, page, read, color) {
  // the constructor...
  let newBookBox = document.createElement("div");
  let removeButton = document.createElement("button");
  let toggleButton = document.createElement("button");

  newBookBox.classList.add("bookBox", id);

  removeButton.innerHTML = "Remove";
  toggleButton.innerHTML = "change Read stats";

  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
  this.id = id;

  myLibrary.push(this);

  newBookBox.innerHTML = `<div class="bookTitle">${myLibrary[c].title}</div>
  <div class="author">By ${myLibrary[c].author}</div>
  <div>${myLibrary[c].page} Pages</div>
  <div class="${color}">${myLibrary[c].read}</div>`;

  bookShelf.append(newBookBox);

  newBookBox.append(toggleButton);
  newBookBox.append(removeButton);

  c++;
  id++;

  removeButton.addEventListener("click", () => {
    let boxId = removeButton.parentElement.classList[1];
    myLibrary.forEach((e) => {
      if (boxId == e.id) {
        myLibrary.splice(myLibrary.indexOf(e), 1);
        c--;
        removeButton.parentElement.remove();
      }
    });
  });

  toggleButton.addEventListener("click", () => {
    let stats = toggleButton.previousElementSibling;
    let boxId2 = toggleButton.parentElement.classList[1];
    function changeReadInObj(newStat) {
      myLibrary.forEach((e) => {
        if (boxId2 == e.id) {
          e.read = newStat;
        }
      });
    }

    if (stats.classList[0] === "green") {
      stats.classList.remove("green");
      stats.classList.add("red");
      stats.innerHTML = "Didn't Read it";
      changeReadInObj("Didn't Read it");
    } else {
      stats.classList.remove("red");
      stats.classList.add("green");
      stats.innerHTML = "I Read it";
      changeReadInObj("I Read it");
    }
  });
}

let readStat;
bookSub.addEventListener("click", (event) => {
  event.preventDefault();

  event.preventDefault();
  if (form.checkValidity()) {
    if (readCheck.checked) {
      console.log("ffff");
      readStat = "I Read it";
      statColor = "green";
    } else {
      readStat = "Didn't Read it";
      statColor = "red";
    }
    addBookToLibrary(
      bookTitle.value,
      bookAuthor.value,
      bookPage.value,
      readStat,
      statColor
    );
    dialog.close();
  } else {
    form.reportValidity();
  }
});

function addBookToLibrary(title, author, page, read, color) {
  let createBook = new Book(title, author, page, read, color);
}
