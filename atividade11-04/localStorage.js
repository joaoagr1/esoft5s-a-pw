function contador() {
  const localStorageInfos = JSON.parse(localStorage.getItem("infoAcessos"));
  console.log(localStorageInfos);

  if (localStorageInfos) {
    if (localStorageInfos.count) {
      let countAtual = parseInt(localStorageInfos.count);
      return countAtual + 1;
    } else if (localStorageInfos.count == undefined) {
      return 1;
    }
  }
}

function salvaInformacoesNoLocalStorage() {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const dataFormatada = new Intl.DateTimeFormat("pt-BR", options).format(
    new Date()
  );

  const infos = {
    dataAcesso: dataFormatada,
    count: contador(),
  };

  localStorage.setItem("infoAcessos", JSON.stringify(infos));
}

function insereInformacoesNoHtml() {
  const paragrafo = document.querySelector("#localStorageInfos");
  const localStorageInfos = JSON.parse(localStorage.getItem("infoAcessos"));
  paragrafo.innerHTML = `Esta página foi visitada ${localStorageInfos.count} vezes. A última visita foi: ${localStorageInfos.dataAcesso}`;
}

salvaInformacoesNoLocalStorage();
insereInformacoesNoHtml();
