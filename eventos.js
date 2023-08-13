document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("verde");
    const button = document.getElementById("button");

    div.addEventListener("click", function saludarDiv() {
        if (saludo === false) {
            alert("Hola! Soy el div");
        } saludo = false
    })
})