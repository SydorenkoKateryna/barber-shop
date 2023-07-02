const openModalBtn = document.querySelectorAll("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

const toggleModal = () => {
  modal.classList.toggle("backdrop--hidden");
};

const onBackdropClick = (e) => {
  if (e.currentTarget === e.target) {
    toggleModal();
  }
};

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});
closeModalBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", onBackdropClick);
