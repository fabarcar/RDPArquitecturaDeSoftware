const btnTema = document.getElementById("btnTema");
const body = document.body;

btnTema.addEventListener("click", () => {
    body.classList.toggle("dark");
});

document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
