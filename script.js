console.log('Add your name in {{name}}');
console.log('Add the current date in {{date}}');
console.log('Add a dialog that triggers when the visitor clicks Contact information');

const menuModalButton = document.querySelector(".menu-modal-button");
const modal = document.querySelector(".modal");
const contentDate = document.querySelector(".content-date");
const modalClose = document.querySelector(".modal-close");


const date = new Date()
const formattedDate = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
  year: "numeric",
  month: "2-digit",
  day: "2-digit"}) ;

function showModal() {
    modal.classList.toggle("modal-open");
}


contentDate.innerHTML = formattedDate;

menuModalButton.addEventListener("click", showModal)
modalClose.addEventListener("click", showModal);