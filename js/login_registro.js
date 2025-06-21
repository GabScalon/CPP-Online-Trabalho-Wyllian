function mostraLoginLogon() {
  document.getElementById("dropdownLog").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdownLog");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function validaLoginUsuario(inputId, imgId) {
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);

  if (input.value.trim() !== "" && input.value.length >= 4) {
    img.classList.remove("invisivel");
  } else {
    img.classList.add("invisivel");
  }
}

function validaSenhaUsuario(inputId, imgId) {
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);

  if (checagensSenha(input.value)) {
    img.classList.remove("invisivel");
  } else {
    img.classList.add("invisivel");
  }
}

function checagensSenha(senha) {
  if (senha.trim() === "") {
    return false;
  }
  if (senha.length < 5) {
    return false;
  }
  var temNumero = false;
  var temLetra = false;
  for (i = 0; i < senha.length; i++) {
    if (ehNumero(senha[i])) {
      temNumero = true;
    } else if (ehLetra(senha[i])) {
      temLetra = true;
    }
    if (temLetra && temNumero) {
      return true;
    }
  }
  return false;
}

function validaLogin(imgId1, imgId2, event) {
  //  Depois tem que checar se a conta existe quando implementar isso
  const img1 = document.getElementById(imgId1);
  const img2 = document.getElementById(imgId2);

  if (
    img1.classList.contains("invisivel") ||
    img2.classList.contains("invisivel")
  ) {
    event.preventDefault();
    window.alert("Login inválido, tente novamente.");
  }
  //  Mudar o botão de login/registrar por um botão de conta após o login
  else {
    window.location.href = "./index.html";
    window.alert("Login efetuado com sucesso");
  }
}

function validaEmailUsuario(emailId, imgId) {
  const email = document.getElementById(emailId);
  const img = document.getElementById(imgId);

  if (ehEmail(email.value)) {
    img.classList.remove("invisivel");
  } else {
    img.classList.add("invisivel");
  }
}

function validaIgualdade(inputId, inputComparaId, imgId) {
  const input = document.getElementById(inputId);
  const inputCompara = document.getElementById(inputComparaId);
  const img = document.getElementById(imgId);

  if (input.value === inputCompara.value) {
    img.classList.remove("invisivel");
  } else {
    img.classList.add("invisivel");
  }
}

function validaRegistro(imgId1, imgId2, imgId3, imgId4, imgId5, event) {
  //  Ainda falta ver se já tem uma conta com esse nome na base de dados, mas ainda não temos a db
  const img1 = document.getElementById(imgId1);
  const img2 = document.getElementById(imgId2);
  const img3 = document.getElementById(imgId3);
  const img4 = document.getElementById(imgId4);
  const img5 = document.getElementById(imgId5);

  if (
    img1.classList.contains("invisivel") ||
    img2.classList.contains("invisivel") ||
    img3.classList.contains("invisivel") ||
    img4.classList.contains("invisivel") ||
    img5.classList.contains("invisivel")
  ) {
    event.preventDefault();
    window.alert("Registro inválido, tente novamente.");
  }
  //  Mudar o botão de login/registrar por um botão de conta após o login
  else {
    window.location.href = "./login.html";
    window.alert("Conta criada com sucesso");
  }
}

function ehLetra(char) {
  return /^[a-zA-Z]$/.test(char); //  Usa RegEx pra ver se o caractere é uma letra
}

function ehNumero(char) {
  return /\d/.test(char); // Usa RegEx pra ver se o caractere é um número
}

function ehEmail(inputEmail) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmail);
  /* Usa RegEx pra ver se o input é um email através de checar se há um @, se não tem espaços,
  se tem um . depois do email, se tem pelo menos duas letras depois do ., aceita extensões de 
  domínios múltiplos como .com.br e aceita algumas caracteres como letras e números antes do @*/
}
