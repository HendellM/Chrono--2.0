document.addEventListener("DOMContentLoaded", () => {
  const btnLupa = document.getElementById("btn-lupa");
  const inputPesquisa = document.getElementById("input-pesquisa");
  btnLupa.addEventListener("click", () => {
    inputPesquisa.classList.toggle("show");
    inputPesquisa.focus();
  });
});

document.getElementById("feedback-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const action = form.action;
  const feedbackAlert = document.getElementById("feedback-alert");

  feedbackAlert.style.display = "none";

  fetch(action, {
    method: "POST",
    body: data,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.result === "success") {
      feedbackAlert.style.display = "block";
      feedbackAlert.className = "alert alert-success";
      feedbackAlert.textContent = "Formulário enviado com sucesso!";
      form.reset(); 
    } else {
      throw new Error(data.error || "Erro desconhecido.");
    }
  })
  .catch(error => {
    feedbackAlert.style.display = "block";
    feedbackAlert.className = "alert alert-danger";
    feedbackAlert.textContent = `Erro ao enviar o formulário: ${error.message}`;
  });
});
