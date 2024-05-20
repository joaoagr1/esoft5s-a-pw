document.addEventListener("DOMContentLoaded", () => {

  const createHeader = () => {
    const header = document.createElement("header");
    header.id = "header";

    const link = document.createElement("a");
    link.href = "./index.html";

    const h1 = document.createElement("h1");
    h1.textContent = "Squirtle";

    link.appendChild(h1);
    header.appendChild(link);

    document.body.appendChild(header);
  };

  const createNav = () => {
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Navegação principal");

    const ul = document.createElement("ul");
    const navItems = [
      { href: "#info-squirtle", text: "Informações sobre Squirtle" },
      { href: "#caracteristicas", text: "Características" },
      { href: "#curiosidades", text: "Curiosidades" },
      { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
      { href: "#recursos", text: "Recursos Adicionais" },
      { href: "#evolucao", text: "Evolução" },
      { href: "./pages/pokemon/index.html?name=wartortle", text: "pokemao" }
    ];

    navItems.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.body.appendChild(nav);
  };

  const createSection = (id, label, contentElements) => {
    const section = document.createElement("section");
    section.id = id;
    section.setAttribute("aria-labelledby", `${id}-label`);

    const h2 = document.createElement("h2");
    h2.id = `${id}-label`;
    h2.textContent = label;
    section.appendChild(h2);

    contentElements.forEach(element => section.appendChild(element));

    return section;
  };

  const createMain = () => {
    const main = document.createElement("main");

    const infoSquirtleContent = [
      (() => {
        const div = document.createElement("div");

        const img1 = document.createElement("img");
        img1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
        img1.alt = "Squirtle 1";

        const img2 = document.createElement("img");
        img2.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
        img2.alt = "Squirtle 2";

        div.appendChild(img1);
        div.appendChild(img2);

        return div;
      })(),
      (() => {
        const p = document.createElement("p");
        p.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.";
        return p;
      })()
    ];
    main.appendChild(createSection("info-squirtle", "Informações sobre Squirtle", infoSquirtleContent));

    const caracteristicasContent = [
      (() => {
        const p = document.createElement("p");
        p.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.";
        return p;
      })()
    ];
    main.appendChild(createSection("caracteristicas", "Características", caracteristicasContent));

    const curiosidadesContent = [
      (() => {
        const ul = document.createElement("ul");

        const curiosidades = [
          "Squirtle é um dos Pokémon mais populares e adoráveis.",
          "Seu nome deriva das palavras 'squirrel' (esquilo) e 'turtle' (tartaruga).",
          "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."
        ];

        curiosidades.forEach(text => {
          const li = document.createElement("li");
          li.textContent = text;
          ul.appendChild(li);
        });

        return ul;
      })()
    ];
    main.appendChild(createSection("curiosidades", "Curiosidades", curiosidadesContent));

    const artigoSquirtleContent = [
      (() => {
        const p1 = document.createElement("p");
        p1.textContent = "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.";
        return p1;
      })(),
      (() => {
        const p2 = document.createElement("p");
        p2.textContent = "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.";
        return p2;
      })(),
      (() => {
        const p3 = document.createElement("p");
        p3.textContent = "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.";
        return p3;
      })()
    ];
    main.appendChild(createSection("artigo-squirtle", "Squirtle: O Amigo Aquático", artigoSquirtleContent));

    const recursosContent = [
      (() => {
        const ul = document.createElement("ul");

        const recursos = [
          { href: "https://www.pokemon.com/br/pokedex/squirtle", text: "Pokédex - Squirtle" },
          { href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)", text: "Bulbapedia - Squirtle" }
        ];

        recursos.forEach(item => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = item.href;
          a.target = "_blank";
          a.textContent = item.text;
          li.appendChild(a);
          ul.appendChild(li);
        });

        return ul;
      })()
    ];
    main.appendChild(createSection("recursos", "Recursos Adicionais", recursosContent));

    const evolucaoContent = [
      (() => {
        const ul = document.createElement("ul");

        const evolucoes = [
          { href: "./pages/pokemon/index.html?name=squirtle", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", alt: "Squirtle", label: "1. Squirtle" },
          { href: "./pages/pokemon/index.html?name=wartortle", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png", alt: "Wartortle", label: "2. Wartortle" },
          { href: "./pages/pokemon/index.html?name=blastoise", src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", alt: "Blastoise", label: "3. Blastoise" }
        ];

        evolucoes.forEach(item => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = item.href;

          const figure = document.createElement("figure");

          const img = document.createElement("img");
          img.src = item.src;
          img.alt = item.alt;

          const figcaption = document.createElement("figcaption");
          figcaption.textContent = item.label;

          figure.appendChild(img);
          figure.appendChild(figcaption);
          a.appendChild(figure);
          li.appendChild(a);
          ul.appendChild(li);
        });

        return ul;
      })()
    ];
    main.appendChild(createSection("evolucao", "Evoluções", evolucaoContent));

    document.body.appendChild(main);
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.setAttribute("aria-label", "Rodapé");

    const p1 = document.createElement("p");
    p1.setAttribute("aria-label", "Copyright");
    p1.textContent = "© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.";

    const p2 = document.createElement("p");
    const a1 = document.createElement("a");
    a1.href = "#header";
    a1.textContent = "Voltar para o topo";
    p2.appendChild(a1);

    const p3 = document.createElement("p");
    const a2 = document.createElement("a");
    a2.href = "mailto:contato@squirtlepage.com";
    a2.textContent = "Contato via e-mail";
    p3.appendChild(a2);

    const p4 = document.createElement("p");
    const a3 = document.createElement("a");
    a3.href = "tel:+5555555555";
    a3.textContent = "Telefone: (55) 5555-5555";
    p4.appendChild(a3);

    footer.appendChild(p1);
    footer.appendChild(p2);
    footer.appendChild(p3);
    footer.appendChild(p4);

    document.body.appendChild(footer);
  };

  createHeader();
  createNav();
  createMain();
  createFooter();
});
