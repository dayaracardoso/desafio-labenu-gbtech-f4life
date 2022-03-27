function validaCampos() {
  //valida os campos não estão vazios e se o e-mail foi digitado corretamente
  let nome = document.getElementById("nome");
  let email = document.getElementById("email"); // pega o campo email do formulário pelo id email
  let mensagem = document.getElementById("mensagem"); // pega o campo mensagem do formulário pelo id mensagem
  let user = email.value.substring(0, email.value.indexOf("@")); // variável user: tem como valor tudo que está antes do arroba "@" no campoe-mail
  let domain = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.length
  ); // variável domain: tem como valor tudo que está depois do arroba "@" no campo e-mail
  const emailValido = /^[a-zA-Z0-9.]+@[a-z0-9]+.[a-z.]+$/i; // Regex - Expressão regular que entra nos critérios pedidos pelo desafio, o e-mail deve ser preenchido neste padrão

  if (nome.value == "") {
    // se o campo nome estiver vazio, retorne false
    alert("campo nome em branco");
    nome.focus();
    return false;
  }

  if (
    emailValido.test(user + "@" + domain) &&
    user.length > 0 &&
    user.length < 33 &&
    domain.length > 0 &&
    domain.length < 17
  ) {
    // somente se tudo estiver correto no campo e-mail
  } else if (
    emailValido.test(user + "@" + domain) == false ||
    user.length < 1 ||
    user.length > 32 ||
    domain.length > 1 ||
    domain.length > 16 ||
    email.value == ""
  ) {
    // se qualquer das condições não satisfazer, retorne false
    alert("Erro no envio: Endereço de mail inválido");
    return false;
  }

  if (mensagem.value == "") {
    // se o campo mensagem estiver vazio, retorne false
    alert("Erro no envio: Insira uma mensagem");
    mensagem.focus();
    return false;
  }
  return true; //se todas as condições satisfazerem, retorne true
}

const form = document.querySelector("form"); // define form como o formulário
function validaTudo(event) {
  event.preventDefault();
  if (!validaCampos()) {
    // se a função não tiver return true
    alert("Erro no envio. Verifique os dados e tente novamente");
  } else {
    // se as funções retornarem true (se o usuário preencher tudo corretamente) o formulário é enviado
    alert("Obrigado pelo contato, " + nome.value + "!"); // Frase de sucesso: pega o que o usuário digitar no campo Nome do formulário
    form.submit(); // enviaro  formulário
  }
}
