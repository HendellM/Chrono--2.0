document.addEventListener("DOMContentLoaded", () => {
    const btnLupa = document.getElementById("btn-lupa");
    const inputPesquisa = document.getElementById("input-pesquisa");
    btnLupa.addEventListener("click", () => {
      inputPesquisa.classList.toggle("show");
      inputPesquisa.focus();
    });
  });
  