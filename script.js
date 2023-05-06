let myLibrary = [];
let btnAddBook = document.querySelector("#Add-book-btn");
let btnClear = document.querySelector("#clear-btn");

btnAddBook.addEventListener("click", addBook);
btnClear.addEventListener('click', clearInputs);

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function checkReadStatus(readStatus) {
  if (readStatus) {
    return "read";
  } else {
    return "Not read yet";
  }
}

function cancelButton() {
  let btnCancel = document.querySelectorAll(".cancel");
  btnCancel.forEach((button) => {
    button.addEventListener("click", () => button.parentNode.remove());
  });
}

function addBook() {
  reloadLibrary();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let readStatus = checkReadStatus(document.querySelector("#checkbox-read").checked);

  addBookToLibrary(title, author, pages, readStatus);
  displayBooks(myLibrary);
  cancelButton();
  clearInputs();
}

function addBookToLibrary(title, author, pages, readStatus) {
  let book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function displayBooks(myLibrary) {
  let title;
  let author;
  let pages;
  let read;
  let i;
  let flag = false;

  myLibrary.forEach((book) => {
    if (!flag) {
      i = 0;
      flag = true;
    }
    title = book.title;
    author = book.author;
    pages = book.pages;
    read = book.readStatus;

    let div = document.createElement("div");
    const emptyCard = document.querySelector(".empty-card");
    const booksCards = document.querySelector(".books-cards");

    div.setAttribute("class", "card");
    div.setAttribute("id", `${i}`);
    div.innerHTML = `<button class="cancel">x</button> <h3 class="title">${title}</h3><p class="author">By ${author}</p><p class="pages">Pages: ${pages}</p><p class="status">${read}</p>`;

    booksCards.insertBefore(div, emptyCard);
    i++;
  });
}

function clearInputs(){
  document.querySelector("#title").value = '';
  document.querySelector("#author").value = '';
  document.querySelector("#pages").value = '';
  document.querySelector("#checkbox-read").checked = false;
}

function reloadLibrary() {
  const booksCards = document.querySelector(".books-cards");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });  
}

cancelButton();
