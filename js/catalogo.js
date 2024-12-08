document.addEventListener("DOMContentLoaded", () => {
  const btnLupa = document.getElementById("btn-lupa");
  const inputPesquisa = document.getElementById("input-pesquisa");
  btnLupa.addEventListener("click", () => {
    inputPesquisa.classList.toggle("show");
    inputPesquisa.focus();
  });
});

  function searchCards() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("card");
    
    Array.from(cards).forEach((card) => {
      const title = card.querySelector(".card-title").innerText.toLowerCase();
      if (title.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function filterCards(category) {
    const cards = document.getElementsByClassName("card");

    Array.from(cards).forEach((card) => {
      if (category === "all") {
        card.style.display = "block";
      } else if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function selectFilter(category, element) {

    filterCards(category);

    const items = document.querySelectorAll("#dropdownFilters .dropdown-item");
    items.forEach((item) => item.classList.remove("active"));

    element.classList.add("active");
  }
