const botao = document.getElementById("botao-tema")
const icone = document.getElementById("icone-tema")

botao.addEventListener("click", () => {

  document.body.classList.toggle("modo-escuro")

  if (document.body.classList.contains("modo-escuro")) {
    icone.src = "moon.png"
  } else {
    icone.src = "sun.png"
  }

})