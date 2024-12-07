
document.getElementById("linkCadastro").addEventListener("click", function() {
    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formCadastro").style.display = "block";
});


document.getElementById("linkEsqueceuSenha").addEventListener("click", function() {
    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formEsqueceuSenha").style.display = "block";
});


document.getElementById("linkVoltarLogin").addEventListener("click", function() {
    document.getElementById("formCadastro").style.display = "none";
    document.getElementById("formLogin").style.display = "block";
});

document.getElementById("linkVoltarLoginSenha").addEventListener("click", function() {
    document.getElementById("formEsqueceuSenha").style.display = "none";
    document.getElementById("formLogin").style.display = "block";
});

window.addEventListener("load", function() {
    const form = document.getElementById('cadastro');
    const alertPlaceholder = document.getElementById('alert-placeholder');
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
  
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then(result => {
        if (result.result === 'success') {
          alertPlaceholder.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Cadastro concluido com sucesso!</strong> Agora você pode desfrutar de todas as funções do site.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else if (result.result === 'error' && result.message === 'Email já cadastrado') {
          alertPlaceholder.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Aviso!</strong> Este e-mail já está cadastrado.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
          alertPlaceholder.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Erro!</strong> ${result.error || 'Aconteceu um erro desconhecido.'}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        }
      })
      .catch(() => {
        alertPlaceholder.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Erro!</strong> Algo deu errado, tente novamente.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
      });
    });
  });
