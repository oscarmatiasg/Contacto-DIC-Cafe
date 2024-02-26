function addLink() {
    const element = document.createElement("a");
    element.setAttribute("href", "https://diveintocode.jp/");
    element.innerText = "DPro";
    const parentElement = document.getElementsByTagName("div")[0];
    parentElement.appendChild(element);
};

  // Función agregada para eliminar el atributo href.
function removeLink() {
    const link = document.getElementsByTagName("a")[0];
    link.removeAttribute("href");
}

window.onload = function() {
    addLink();
    removeLink();
}