const stars = document.querySelectorAll(".ava input[type='radio']");
const avaValue = document.getElementById("ava-value");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const ava = index + 1;
    avaValue.textContent = `Avaliação: ${ava} estrelas`;

    // Defina todas as estrelas à esquerda como selecionadas
    for (let i = 0; i <= index; i++) {
      stars[i].checked = true;
    }
  });
});



