export function HTMLosszeallit(lista) {
    let elem = document.querySelector(".szamok");
    for (let i = 0; i < lista.length; i++) {
        elem.innerHTML += egyElem(lista[i]);
    }
    let gombok = document.querySelectorAll(".szamok button");
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click", function(){ 
        kijelzohozAdas(gombok[i].textContent)
        });
    }
}

export function egyElem(elem) {
    return `<button onclick=kijelzohozAdas("${elem.nev}") id="${elem.id}">${elem.nev}</button>`;
}

let kijelzo = document.querySelector(".kijelzo");

export function kijelzohozAdas(elem) {
    kijelzo.textContent += elem;
}