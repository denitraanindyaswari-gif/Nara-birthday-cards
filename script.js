const sections = [...document.querySelectorAll(".section")];
const counter = document.getElementById("counter");
const modal = document.getElementById("memoryModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeBtn");
const modalClose = document.getElementById("modalClose");

let current = 1;

function showSection(number) {
  current = number;
  sections.forEach(section => {
    section.classList.toggle("active", Number(section.dataset.section) === number);
  });
  counter.textContent = `${String(number).padStart(2, "0")} / 07`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-target]").forEach(button => {
  button.addEventListener("click", () => showSection(Number(button.dataset.target)));
});

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    modalImage.src = `images/${card.dataset.photo}`;
    modalCaption.textContent = card.dataset.caption;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("restart").addEventListener("click", () => showSection(1));
