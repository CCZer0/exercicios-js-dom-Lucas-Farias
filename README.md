# Exercícios de JavaScript - Manipulação do DOM

Este repositório contém uma série de exercícios práticos focados na manipulação do DOM (Document Object Model) com JavaScript, HTML e CSS.

## 🚀 Como Executar

Cada questão é independente. Para executar qualquer um dos exercícios:

1.  Certifique-se de que o arquivo `.html` e seu respectivo arquivo `.js` (ex: `questao01.html` e `questao01.js`) estejam salvos na mesma pasta.
2.  Abra o arquivo `.html` desejado diretamente no seu navegador web (Google Chrome, Firefox, etc.).

---

## 📝 Questão 01: Inserir Título

* **Arquivos:** `questao01.html`, `questao01.js`
* **Funcionalidade:** O usuário digita um texto no campo de entrada. Ao clicar no botão "Clique aqui", o texto digitado é capturado e inserido como conteúdo de uma tag `<h1>`. A cor do texto do `<h1>` também é alterada para azul.

---

## 🔄 Questão 02: Mudar Forma

* **Arquivos:** `questao02.html`, `questao02.js`
* **Funcionalidade:** Uma `<div>` é exibida inicialmente como um círculo (`border-radius: 50%`) na cor preta. Ao clicar no botão:
    * Se for um círculo, ela se transforma em um quadrado (`border-radius: 0%`) na cor azul-escuro, e o texto do botão muda para "Retornar forma original".
    * Se for um quadrado, ela retorna ao formato de círculo na cor preta, e o texto do botão volta a ser "Mudar forma".

---

## 📋 Questão 03: Formulário de Cadastro

* **Arquivos:** `questao03.html`, `questao03.js`
* **Funcionalidade:** O usuário preenche um formulário com dados pessoais (Nome, Data de Nascimento, Rua, Número, Cidade e Estado). Ao clicar no botão "Cadastrar":
    1.  O script coleta todos os valores dos campos de entrada.
    2.  Utiliza um *template literal* para formatar uma frase contendo todas as informações.
    3.  Exibe essa frase em um parágrafo (`<p id="resultado">`) abaixo do formulário.
    4.  Estiliza o parágrafo de resultado com a cor verde e um tamanho de fonte maior (`24px`).
