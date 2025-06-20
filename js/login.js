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
    if (/\d/.test(senha[i])) {
      //  Usa RegEx pra ver se o caractere é um número
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

function ehLetra(char) {
  return /^[a-zA-Z]$/.test(char); //  Usa RegEx pra ver se o caractere é uma letra
}

function validaLogin(imgId1, imgId2, event) {
  //  Depois tem que chegar se a conta existe quando implementar isso
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
