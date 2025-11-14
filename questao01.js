function inserirTitulo() {
  const titulo = document.getElementById('titulo');

  const campoInput = document.getElementById('txt-titulo');

  const textoDigitado = campoInput.value;

  titulo.innerText = textoDigitado;

  titulo.style.color = 'blue';
}