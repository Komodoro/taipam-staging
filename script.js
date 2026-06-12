const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");

const headerObserver = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle("is-scrolled", !entry.isIntersecting);
  },
  { rootMargin: "-24px 0px 0px 0px" },
);

headerObserver.observe(document.body);

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
