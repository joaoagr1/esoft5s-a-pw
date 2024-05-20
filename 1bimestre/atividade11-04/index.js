const divImg = document.getElementById("div-img");
const h1 = document.getElementById("header-h1");
const infoName = document.getElementById("info-squirtle-label");
const title = document.querySelector("title");
const img = document.querySelector("div-img > img");
let i = 0;

const urlName = location.href.split("=")[1];
h1.innerHTML = `${urlName}`;
infoName.innerHTML = `Informações sobre ${urlName}`;

const nameFetchUrl = urlName.toLocaleLowerCase();
title.textContent = `Página do Pokémon ${urlName}`;

fetch(`https://pokeapi.co/api/v2/pokemon/${nameFetchUrl}`)
  .then((response) => response.json())
  .then((data) => {
    const obj = Object.values(data.sprites);
    const objFitler = obj.filter((indice) => typeof indice == "string");
    console.log(objFitler);

    const spriteUrl = objFitler[0];

    const imgElement = document.createElement("img");
    imgElement.src = spriteUrl;

    divImg.appendChild(imgElement);
    divImg.addEventListener("click", () => {
      console.log("click");
      if (i === 3) {
        i = 0;
        imgElement.src = objFitler[0];
      } else {
        i = i + 1;
        imgElement.src = objFitler[i];
      }
    });
  })
  .catch((error) => console.log(error));
