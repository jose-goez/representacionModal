const btnTodos = document.querySelector(".todos");
const btnTatuador = document.querySelector(".tatuador");
const btnDiseñadora = document.querySelector(".diseñadora");
const btnAdministrador = document.querySelector(".administrador");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");

// ===================botones de pantallas==================
btnTodos.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "block";
  img3.style.display = "block";
  img4.style.display = "block";
});

btnTatuador.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "block";
  img4.style.display = "none";
});

btnDiseñadora.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
});

btnAdministrador.addEventListener("click", () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "block";
});

// ======================fotos enlaces y boton salir X==========================
const sectionDiseñadora = document.querySelector(".sectionDiseñadora");
const documento = document.getElementById("documento");
const btnX = document.getElementById("btnX");

img1.addEventListener("click", () => {
  sectionDiseñadora.style.display = "block";
  sectionDiseñadora.classList.remove("animationJs");
  sectionDiseñadora.classList.remove("animationJsD");
  documento.style.display = "none";
});
btnX.addEventListener("click", () => {
  documento.style.display = "block";
  sectionDiseñadora.style.display = "none";
});

const tatuador2 = document.querySelector(".tatuador2");
const btnTatuador2 = document.getElementById("btnTatuador2");

img2.addEventListener("click", () => {
  tatuador2.style.display = "block";
  tatuador2.classList.remove("animationJs");
  tatuador2.classList.remove("animationJsD");
  documento.style.display = "none";
});
btnTatuador2.addEventListener("click", () => {
  documento.style.display = "block";
  tatuador2.style.display = "none";
});

const tatuador3 = document.querySelector(".tatuador3");
const btnTatuador3 = document.getElementById("btnTatuador3");

img3.addEventListener("click", () => {
  tatuador3.style.display = "block";
  tatuador3.classList.remove("animationJs");
  tatuador3.classList.remove("animationJsD");
  documento.style.display = "none";
});
btnTatuador3.addEventListener("click", () => {
  documento.style.display = "block";
  tatuador3.style.display = "none";
});

const tatuador4 = document.querySelector(".tatuador4");
const btnTatuador4 = document.getElementById("btnTatuador4");

img4.addEventListener("click", () => {
  tatuador4.style.display = "block";
  tatuador4.classList.remove("animationJs");
  tatuador4.classList.remove("animationJsD");
  documento.style.display = "none";
});
btnTatuador4.addEventListener("click", () => {
  documento.style.display = "block";
  tatuador4.style.display = "none";
});
// =======================botones izquierdos y derechos ====================
//  perfil 1
const btnIzquierdo = document.getElementById("btnIzquierdo");
btnIzquierdo.addEventListener("click", () => {
  tatuador4.style.display = "block";
  tatuador4.classList.add("animationJs");
  tatuador4.classList.remove("animationJsD");
  documento.style.display = "none";
  sectionDiseñadora.style.display = "none";
});

const btnDerecho = document.getElementById("btnDerecho");
btnDerecho.addEventListener("click", () => {
  tatuador2.style.display = "block";
  tatuador2.classList.add("animationJsD");
  tatuador2.classList.remove("animationJs");
  documento.style.display = "none";
  sectionDiseñadora.style.display = "none";
});
// perfil2
const btnTatuador2Izquierdo = document.getElementById("btnTatuador2Izquierdo");
btnTatuador2Izquierdo.addEventListener("click", () => {
  sectionDiseñadora.style.display = "block";
  sectionDiseñadora.classList.add("animationJs");
  sectionDiseñadora.classList.remove("animationJsD");
  documento.style.display = "none";
  tatuador2.style.display = "none";
});

const btnTatuador2Derecho = document.getElementById("btnTatuador2Derecho");
btnTatuador2Derecho.addEventListener("click", () => {
  tatuador3.style.display = "block";
  tatuador3.classList.add("animationJsD");
  tatuador3.classList.remove("animationJs");
  documento.style.display = "none";
  tatuador2.style.display = "none";
});
// perfil3
const btnTatuador3Izquierdo = document.getElementById("btnTatuador3Izquierdo");
btnTatuador3Izquierdo.addEventListener("click", () => {
  tatuador2.style.display = "block";
  tatuador2.classList.add("animationJs");
  tatuador2.classList.remove("animationJsD");
  documento.style.display = "none";
  tatuador3.style.display = "none";
});

const btnTatuador3Derecho = document.getElementById("btnTatuador3Derecho");
btnTatuador3Derecho.addEventListener("click", () => {
  tatuador4.style.display = "block";
  tatuador4.classList.add("animationJsD");
  tatuador4.classList.remove("animationJs");
  documento.style.display = "none";
  tatuador3.style.display = "none";
});
// perfil4
const btnTatuador4Izquierdo = document.getElementById("btnTatuador4Izquierdo");
btnTatuador4Izquierdo.addEventListener("click", () => {
  tatuador3.style.display = "block";
  tatuador3.classList.add("animationJs");
  tatuador3.classList.remove("animationJsD");
  documento.style.display = "none";
  tatuador4.style.display = "none";
});

const btnTatuador4Derecho = document.getElementById("btnTatuador4Derecho");
btnTatuador4Derecho.addEventListener("click", () => {
  sectionDiseñadora.style.display = "block";
  sectionDiseñadora.classList.add("animationJsD");
  sectionDiseñadora.classList.remove("animationJs");
  documento.style.display = "none";
  tatuador4.style.display = "none";
});
