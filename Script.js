function actualizarBotones() {
    const url1 = document.getElementById('url1').value;
    const url2 = document.getElementById('url2').value;
    const url3 = document.getElementById('url3').value;


    document.getElementById('btn1').href = url1;
    document.getElementById('btn2').href = url2;
    document.getElementById('btn3').href = url3;
}


//Mensajes cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada, lista para usar!");
});