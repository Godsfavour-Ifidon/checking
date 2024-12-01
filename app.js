const show = document.querySelector(".show");
const ul = document.querySelector("ul");
show.addEventListener("click", () => {
  ul.classList.toggle("hidden");
});
