let format = document.getElementById("format");
let btn = document.getElementById("btn")


btn.onclick = function() {
    if (format.style.borderRadius === "0%") {
      format.style.width = "200px";
      format.style.height = "200px";
      format.style.borderRadius = "50%";
      format.style.backgroundColor = "black";
      btn.innerText = "Mudar forma";

    } else {
      format.style.width = "200px";
      format.style.height = "200px";
      format.style.borderRadius = "0%";
      format.style.backgroundColor = "darkblue";
      btn.innerText = "Retornar forma original";
    }
}